import Home from '../containers/Home';
import Notfound from '../containers/NotFound';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    name: 'notFound',
    component: Notfound,
  },
];

export default routes;
