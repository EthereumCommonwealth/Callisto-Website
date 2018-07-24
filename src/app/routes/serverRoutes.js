import Home from '../containers/Home';
import ColdStaking from '../containers/ColdStaking';
import SmartContract from '../containers/SmartContract';
import FinantialReport from '../containers/FinantialReport';
import Blog from '../containers/Blog';
import Tag from '../containers/Tag';
import Airdrop from '../containers/Airdrop';
import Faq from '../containers/Faq';
import CommunityGuidlines from '../containers/CommunityGuidlines';
import Post from '../containers/Post';
import Notfound from '../containers/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/faq/',
    exact: true,
    component: Faq,
  },
  {
    path: '/cold-staking/',
    exact: true,
    component: ColdStaking,
  },
  {
    path: '/smart-contract/',
    exact: true,
    component: SmartContract,
  },
  {
    path: '/financial-report/',
    exact: true,
    component: FinantialReport,
  },
  {
    path: '/blog/',
    exact: true,
    component: Blog,
  },
  {
    path: '/blog/post/:slug/',
    exact: true,
    component: Post,
  },
  {
    path: '/blog/topic/:slug/',
    exact: true,
    component: Tag,
  },
  {
    path: '/airdrop/',
    exact: true,
    component: Airdrop,
  },
  {
    path: '/community-guidlines/',
    exact: true,
    component: CommunityGuidlines,
  },
  {
    path: '/:lang(es|en|id|ru)/',
    exact: true,
    component: Home,
  },
  {
    path: '/:lang(es|en|id|ru)/faq',
    exact: true,
    component: Faq,
  },
  {
    path: '/:lang(es|en|id|ru)/cold-staking/',
    exact: true,
    component: ColdStaking,
  },
  {
    path: '/:lang(es|en|id|ru)/smart-contract/',
    exact: true,
    component: SmartContract,
  },
  {
    path: '/:lang(es|en|id|ru)/financial-report/',
    exact: true,
    component: FinantialReport,
  },
  {
    path: '/:lang(es|en|id|ru)/blog/',
    exact: true,
    component: Blog,
  },
  {
    path: '/:lang(es|en|id|ru)/blog/post/:slug',
    exact: true,
    component: Post,
  },
  {
    path: '/:lang(es|en|id|ru)/blog/topic/:slug',
    exact: true,
    component: Tag,
  },
  {
    path: '/:lang(es|en|id|ru)/airdrop/',
    exact: true,
    component: Airdrop,
  },
  {
    path: '/:lang(es|en|id|ru)/community-guidlines/',
    exact: true,
    component: CommunityGuidlines,
  },
  {
    name: 'notFound',
    component: Notfound,
  },
];

export default routes;
