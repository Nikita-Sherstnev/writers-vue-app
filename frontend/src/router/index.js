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
    path: '/writers',
    name: 'Writers',
    component: () => import('../views/WritersList.vue')
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/BooksList.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
