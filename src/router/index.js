import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Service from '../views/Service.vue'
import AboutMe from '../views/AboutMe.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/service', name: 'service', component: Service },
  { path: '/about', name: 'about', component: AboutMe },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
