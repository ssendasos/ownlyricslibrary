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
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/list/:artist/:song',
    name: 'SongView',
    component: () => import('../views/SongView.vue')
  },
  {
    path: '/list/:artist',
    name: 'ArtistList',
    component: () => import('../views/ArtistList.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
