import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/initial',
      name: 'initial',
      component: () => import('@/views/Initialpage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/loginpage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/registerpage.vue')
    },
    {
      path: '/artigos',
      name: 'artigos',
      component: () => import('@/views/Artigos.vue')
    }
  ]
})

export default router
