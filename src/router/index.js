
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

import Home from '../view/Home.vue'
import Stats from '../view/Stats.vue'
import Projects from '../view/Projects.vue'
import Addtask from '../view/Addtask.vue'
import Calendar from '../view/Calendar.vue'
import Setting from '../view/Setting.vue'
import Logout from '../view/Logout.vue'
import SignUp from '../view/SignUp.vue'

import Notify from '../view/Notify.vue'
import Profile from '../view/Profile.vue'

axios.defaults.baseURL = "http://localhost:8080/api/"

const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/stats',name: 'Stats',component: Stats},
  {path: '/projects',name: 'Projects',component: Projects},
  {path: '/addtask/:id',name:'Addtask', component: Addtask},
  // {path: '/addtask/:id',name: 'Addtask',component: Addtask},
  {path: '/calendar',name: 'Calendar',component: Calendar},
  {path: '/setting',name: 'Setting',component: Setting},
  {path: '/logout',name: 'Logout',component: Logout},
  {path: '/signup', name: 'SignUp',component: SignUp},

  {path: '/notify', name:'Notify',component: Notify},
  {path: '/profile', name:'Profile',component: Profile}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
