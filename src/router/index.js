import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ComponentAdvance from '@/views/ComponentAdvance'
import CompositionApi from '@/views/CompositionApi'
import Router from '@/views/Router'
import Axios from '@/views/Axios'
import ElementPlus from '@/views/ElementPlus'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/componentAdvance',
    name: 'componentAdvance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ComponentAdvance
  },
  {
    path: '/router',
    name: 'router',
    component: Router
  },
  {
    path: '/axios',
    name: 'axios',
    component: Axios
  },
  {
    path: '/compositionapi',
    name: 'compositionapi',
    component: CompositionApi
  },
  {
    path: '/element-plus',
    name: 'element-plus',
    component: ElementPlus
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
