import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Info from '../views/Info.vue'
import Projects from '../views/Projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/info', component: Info },
  { path: '/Projects', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
