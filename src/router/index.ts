import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Public',
      component: DefaultLayout,
      redirect: '/',
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/DetailView.vue')
    }
  ]
})

export default router
