import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Login';
import NotFound from "../views/NotFound";
import home from "../components/pages/home";
import blogView from "../components/pages/blogView";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: home,
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/blogView',
      name: 'view blog',
      component: blogView,
    },
    {
      path: '*',
      component: NotFound
    },
  ]
});
