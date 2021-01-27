import { createRouter, createWebHashHistory } from 'vue-router'
import chat from '../views/chat.vue'
import Balans from '../views/Balans.vue'
import Tarif from '../views/Tarif.vue'

const routes = [
  {
    path: '/',
    name: 'chat',
    component: chat
  },
  {
    path: '/balance',
    name: 'Balans',
    component: Balans
  },
  {
    path: '/tariff',
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
