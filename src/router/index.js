import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
