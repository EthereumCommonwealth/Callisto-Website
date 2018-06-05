import Home from '../containers/Home';
import Notfound from '../containers/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/:lang(es|en|id|ru)/',
    exact: true,
    component: Home,
  },
  {
    name: 'notFound',
    component: Notfound,
  },
];

export default routes;
