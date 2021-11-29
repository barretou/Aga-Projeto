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
    path: '/quem-somos',
    name: 'QuemSomos',
    component: () => import(/* webpackChunkName: "about" */ '../views/QuemSomos.vue')
  },
  {
    path: '/servicos',
    name: 'Servicos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicos.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contato.vue')
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cliente.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
