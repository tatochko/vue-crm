import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'main' },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      meta: { layout: 'empty' },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Profile',
      name: 'Profile',
      meta: { layout: 'empty' },
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      meta: { layout: 'empty' },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/Categories',
      name: 'Categories',
      meta: { layout: 'main' },
      component: () => import ('../views/Categories.vue')
    },
    {
      path: '/History',
      name: 'History',
      meta: { layout: 'empty' },
      component: () => import('../views/History.vue')
    },
    {
      path: '/Record',
      name: 'Record',
      meta: { layout: 'empty' },
      component: () => import('../views/Record.vue')
    },
    {
      path: '/Detail',
      name: 'Detail',
      meta: { layout: 'empty' },
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/Planning',
      name: 'Planning',
      meta: { layout: 'empty' },
      component: () => import('../views/Planning.vue')
    }
  ]
})