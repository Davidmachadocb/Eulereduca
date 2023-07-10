import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/state'

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
      component: () => import('@/views/Profile.vue'),
      meta: {
        requiresAuth: true
      }
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
      component: () => import('@/views/Artigos.vue'),
    },
    {
      path: '/artigo/:id',
      name: 'artigo',
      component: () => import('@/views/Artigo.vue')
    },
    {
      path: '/editar-artigo/:id',
      name: '/editar-artigo/',
      component: () => import('@/views/EditarArtigo.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/comentarios',
      name: 'comentarios',
      component: () => import('@/views/comentarios.vue'),
      meta: {
        permissions: ['admin']
      }
    },
    {
      path: '/criar-artigos',
      name: 'criar-artigos',
      component: () => import('@/views/CriarArtigos.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from) => {
  const userStore = useUserStore();
  if (to.meta.permissions) {
    if (!userStore.isAuthenticated) {
      return { path: "/login" }
    } else {
      if(!userStore.isAdmin) {
        return { path: "/" }
      }
    }
  }
});

export default router