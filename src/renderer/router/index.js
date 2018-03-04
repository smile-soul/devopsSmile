import Vue from 'vue';
import Router from 'vue-router';
const _import = require(`./_import_${process.env.NODE_ENV}`);

Vue.use(Router);

import Layout from '@/views/layout/Layout';


export const constantRouterMap = [
  // { path: '/login', component: _import('login/index'), hidden: true },
  // { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  // { path: '/404', component: _import('errorPage/404'), hidden: true },
  // { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    // redirect: 'dashboard',
    // children: [{
    //   path: 'dashboard',
    //   component: _import('dashboard/index'),
    //   name: 'dashboard',
    //   meta: { title: 'dashboard', icon: 'dashboard', noCache: true },
    // }],
  },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   redirect: '/documentation/index',
  //   children: [{
  //     path: 'index',
  //     component: _import('documentation/index'),
  //     name: 'documentation',
  //     meta: { title: 'documentation', icon: 'documentation', noCache: true },
  //   }],
  // },
];

export default new Router({
  // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
