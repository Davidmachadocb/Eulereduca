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
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/profile/edit',
      name: 'editprofile',
      component: () => import('@/views/EditProfile.vue')
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
    },
    {
      path: '/artigo/:id',
      name: 'artigo',
      component: () => import('@/views/Artigo.vue')
    },
    {
      path: '/criar-artigos',
      name: 'criar-artigos',
      component: () => import('@/views/CriarArtigos.vue')
    }
  ]
})

export default router
