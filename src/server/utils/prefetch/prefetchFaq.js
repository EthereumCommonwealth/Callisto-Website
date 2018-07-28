import axios from 'axios';
import blogPosts from '../../../app/services/blogPosts';
import coinStats from '../../../app/services/coinStats';
import getTranslations from '../../getTranslations';
import preparePosts from './preparePosts';
import handleRender from '../handleRender';

const getArticles = async (category) => {
  const articles = await axios.get(`solutions/folders/${category.id}/articles/`, {
    baseURL: 'https://callistonetwork.freshdesk.com/api/v2/',
    headers: { accept: 'application/json' },
    auth: {
      username: process.env.FRESHBOOKS_API,
      password: 'x',
    }
  });
  return {
    id: category.id,
    name: category.name,
    articles: articles.data,
  };
}

const prepareFaq = async (faq) => {
  const elements = [];
  try {
    for (let i = 0; i < faq.length; i++) {
      const article = await getArticles(faq[i])
      elements.push(article);
    }
  } catch (e) {
    console.log(e);
  }
  return elements;
}

const getFAQ = async () => {
  let faqObj;
  try {
    const faq = await axios.get('solutions/categories/43000034228/folders/', {
      baseURL: 'https://callistonetwork.freshdesk.com/api/v2/',
      headers: { accept: 'application/json' },
      auth: {
        username: process.env.FRESHBOOKS_API,
        password: 'x',
      }
    });
    faqObj = await prepareFaq(faq.data);
  } catch (e) {
    console.log(e);
  }
  return faqObj;
}

const prefetchFaq = async (req, res, next) => {
  try {
    const posts = await blogPosts.get('posts?_embed&per_page=50');
    const tags = await blogPosts.get('tags');
    const btcStats = await coinStats.get('ticker/1/');
    const cloStats = await coinStats.get('ticker/2757/');
    const faq = await getFAQ();
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
      faq: faq,
      singlePost: {},
      messages,
    })
  } catch (err) {
    next(err);
  }
}

export default prefetchFaq;
