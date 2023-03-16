import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('../views/auth/SignIn.vue')
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('../views/auth/SignUp.vue')
    },
    {
      path: '/:pathMatch(.*)*', redirect: '/'
    }
  ]
})

export default router
