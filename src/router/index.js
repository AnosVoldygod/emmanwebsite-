import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Info from '../views/Info.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/info', component: Info },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
