import blogPosts from '../../../app/services/blogPosts';
import coinStats from '../../../app/services/coinStats';
import getTranslations from '../../getTranslations';
import preparePosts from './preparePosts';
import handleRender from '../handleRender';

const prefetchData = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed&per_page=50');
    const tags = await blogPosts.get('tags');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    const messages = getTranslations(req.params.lang);
    handleRender(req, res, messages, {
      blogPosts: preparePosts(posts.data),
      blogTags: tags.data,
      marketStats: {
        btcPrice: btcStats.data.data.quotes.USD.price,
        cloPrice: cloStats.data.data.quotes.USD.price,
        volume: cloStats.data.data.quotes.USD.volume_24h,
        marketCap: cloStats.data.data.quotes.USD.market_cap,
      },
      tagPosts: [],
      faq: [],
      singlePost: {},
      messages,
    })
  } catch (err) {
    next(err);
  }
}

export default prefetchData;
