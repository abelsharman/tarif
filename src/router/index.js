import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import chat from '../views/chat.vue'
import Balans from '../views/Balans.vue'
import Tarif from '../views/Tarif.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/balans',
    name: 'Balans',
    component: Balans
  },
  {
    path: '/tarif',
    name: 'Tarif',
    component: Tarif
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes
})

export default router
