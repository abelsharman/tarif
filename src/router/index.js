import { createRouter, createWebHashHistory } from 'vue-router'
import chat from '../views/chat.vue'
import Balans from '../views/Balans.vue'
import Tarif from '../views/Tarif.vue'
import First from '../views/First.vue'

const routes = [
  {
    path: '/',
    name: 'chat',
    component: chat,
    meta: {
      title: 'Ваши чат-боты'
    }
  },
  {
    path: '/balance',
    name: 'Balans',
    component: Balans,
    meta: {
      title: 'Ваш баланс'
    }
  },
  {
    path: '/tariff/:bot',
    name: 'Tarif',
    component: Tarif,
    meta: {
      title: 'Тарифы'
    }
  },
  {
    path: '/first',
    name: 'First',
    component: First,
    meta: {
      title: 'Главная страница'
    }
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes
})



router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })

  .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...

export default router
