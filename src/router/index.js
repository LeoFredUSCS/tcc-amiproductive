import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Summary',
    component: Home,
    meta: { title: 'Resumo' }
  },
  {
    path: '/tracking',
    name: 'Tracking',
    meta: { title: 'Rastreamento' },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tracking.vue')
  }
]

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(process.env.BASE_URL),
  routes
})

export default router
