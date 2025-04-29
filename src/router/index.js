import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Hobbies from '../views/Hobbies.vue'
import Login from '../views/Login.vue'
import FosterDogs from '../views/nested/FosterDogs.vue'
import Projects from '../views/Projects.vue'
import AJuniorDataEngineerView from '../views/nested/AJuniorDataEngineerView.vue'
import { isAuthenticated } from './auth.js'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/ForFun/fosterdogs', name: 'FosterDogs', component: FosterDogs },
  { path: '/hobbies', name: 'Hobbies', component: Hobbies },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/Projects', name: 'Projects', component: Projects },
  {
    path: '/Projects/dataEngineerProjectA',
    name: 'AJuniorDataEngineerView',
    component: AJuniorDataEngineerView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  if (to.name !== 'Login' && JSON.parse(localStorage.getItem('isLoggedIn')) !== true) {
    return { name: 'Login' }
  }
})

export default router
