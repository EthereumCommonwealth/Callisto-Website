import api from './utils/api';
import preparePosts from './utils/preparePosts';
import prepareMarket from './utils/prepareMarket';
import handleRender from '../../render/website/handleRender';

const getPost = (slug, posts) => {
  const filtered = posts.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].slug : false;
}

const getTags = (topics) => {
  const postTags = [];
  topics.forEach(tag => {
    postTags.push({
      id: tag.number,
      name: tag.name,
      slug: tag.slug,
    })
  });
  return postTags;
}

const prepareRelated = (relatedPosts) => {
  const related = [];
  for (let i = 0; i < relatedPosts.length; i++) {
    related.push({
      id: relatedPosts[i].id,
      title: relatedPosts[i].title,
      description: relatedPosts[i].description,
      slug: relatedPosts[i].slug,
    });
  }
  return related;
}

const preparePost = (post, baseImageUrl, posts, tags) => {
  console.log(post.relatedPosts)
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    content: post.content,
    date: post.date,
    link: post.link,
    slug: post.slug,
    cover: post.cover,
    url: `https://callisto.network/blog/post/${post.slug}/`,
    relatedPosts: prepareRelated(post.relatedPosts),
    topics: getTags(post.tags),
    author: post.author,
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
        title: singlePost.data.title,
        description: singlePost.data.description.replace(/<(?:.|\n)*?>/gm, ''),
        image: singlePost.data.cover,
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
