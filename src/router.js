import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Home.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('./Projects.vue'),
  }
  // {
  //   path: '/sponsor',
  //   name: 'Sponsor',
  //   component: () => import('./src/Sponsor.vue'),
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router