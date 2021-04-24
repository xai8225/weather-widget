import VueRouter from 'vue-router'

import Home from '../components/Home';
import Weather from "../components/Weather";
import NotFound from '../components/NotFound';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Home,
      meta: {
        title: 'Home Page',
      }
    },
    {
      path: '/weather/:city',
      name: 'weather',
      component: Weather,
      title: 'Weather Page',
    },
    {
      path: '*',
      name: 'notFound',
      title: '404 Page',
      component: NotFound
    },
  ]
})