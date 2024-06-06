import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '@/views/About.vue'
import Project from '@/views/Project.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projet',
      name: 'Projet',
      component: Project
    },
    {
      path: '/contact', // Chemin pour la page de contact
      name: 'Contact', // Nom de la route
      component: Contact // Composant de contact à afficher
    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
