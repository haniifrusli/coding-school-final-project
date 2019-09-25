import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/product',
      name: 'Data Product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/product/detail',
      name: 'Detail Product',
      component: () => import('./components/DetailProduct.vue')
    },
    {
      path: '/admin/product',
      name: 'Admin Product List',
      component: () => import('./views/admin/product/List.vue')
    },
    {
      path: '/admin/product/insert',
      name: 'Admin Product Insert',
      component: () => import('./views/admin/product/Insert.vue')
    },
    {
      path: '/admin/product/update',
      name: 'Admin Product Update',
      component: () => import('./views/admin/product/Update.vue')
    }
  ]
})
