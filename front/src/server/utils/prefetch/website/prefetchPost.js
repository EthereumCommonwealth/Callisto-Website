import api from './utils/api';
import preparePosts from './utils/preparePosts';
import prepareMarket from './utils/prepareMarket';
import handleRender from '../../render/website/handleRender';

const getSlug = (id, posts) => {
  const filtered = posts.filter(elem => elem.id === id);
  return filtered.length > 0 ? filtered[0].slug : '';
}

const getPost = (slug, posts) => {
  const filtered = posts.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : false;
}

const getTags = (topics, tags) => {
  const postTags = [];
  for (let i = 0; i < tags.length; i++) {
    if (topics.indexOf(tags[i].id) !== -1) {
      postTags.push({
        id: tags[i].id,
        name: tags[i].name,
        slug: tags[i].slug,
      });
    }
  }
  return postTags;
}

const prepareRelated = (relatedPosts, posts) => {
  const related = [];
  for (let i = 0; i < relatedPosts.length; i++) {
    related.push({
      id: relatedPosts[i].id,
      title: relatedPosts[i].title,
      description: relatedPosts[i].excerpt,
      slug: getSlug(relatedPosts[i].id, posts),
    });
  }
  return related;
}

const preparePost = (post, baseImageUrl, posts, tags) => {
  return {
    id: post.id,
    title: post.title.rendered,
    description: post.excerpt.rendered,
    content: post.content.rendered,
    date: post.date,
    link: post.link,
    slug: post.slug,
    cover: `${baseImageUrl}/${post.better_featured_image.media_details.file}`,
    url: `https://callisto.network/blog/post/${post.slug}/`,
    relatedPosts: prepareRelated(post['jetpack-related-posts'], posts),
    topics: getTags(post.tags, tags),
    author: post._embedded.author[0].name,
  }
}

const prefetchPost = async (req, res, next) => {
  try {
    const posts = await api.blog.getPosts(50);
    const btcStats = await api.market.getTicker(1);
    const cloStats = await api.market.getTicker(2757);
    const homeData = await api.website.getHome(req.params.lang)
    const balance = await api.market.getBalance();
    const totalSupply = await api.market.getTotalSuply();
    const audit = await api.audit.getAudits();
    const tags = await api.blog.getTags();
    const internalData = homeData.internalData;
    const messages = homeData.messages;
    const preparedPosts = posts.posts_list && posts.posts_list.length > 0 ? preparePosts(posts.posts_list) : posts;
    const postId = getPost(req.params.slug, preparedPosts);

    if (postId) {
      const singlePost = await api.blog.getSinglePost(postId);
      console.log(singlePost)
      const baseImageUrl = 'https://news.callisto.network/wp-content/uploads';
      const initialState = {
        teamMembers: internalData.teamMembers,
        miningPools: internalData.miningPools,
        blockExplorers: internalData.blockExplorers,
        wallets: internalData.wallets,
        walletsColdStacking: internalData.walletsColdStacking,
        exchanges: internalData.exchanges,
        blogPosts: preparedPosts,
        blogTags: tags.data && tags.data.length > 0 ? tags.data : tags,
        marketStats: prepareMarket(btcStats, cloStats, totalSupply, balance),
        singlePost: preparePost(singlePost.data, baseImageUrl, posts.posts_list, tags.data),
        faq: [],
        tagPosts: [],
        messages,
        audit,
      };

      const blogMessages = {
        title: singlePost.data.title.rendered,
        description: singlePost.data.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, ''),
        image: `${baseImageUrl}/${singlePost.data.better_featured_image.media_details.file}`,
        url: `https://callisto.network/blog/post/${singlePost.data.slug}/`,
        slug: singlePost.data.slug,
      }
      handleRender(req, res, initialState, blogMessages, 'blog')
    } else {
      res.redirect('/not-found/');
    }
  } catch (err) {
    next(err);
  }
}

export default prefetchPost;
