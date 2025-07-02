import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/detail/:id', component: Detail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Force le scroll en haut à chaque navigation
    return { top: 0 }
  }
})

export default router
