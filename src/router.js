import { createRouter, createWebHistory } from 'vue-router'
import Daily from './pages/Daily.vue'
import Hourly from './pages/Hourly.vue'
import Minute from './pages/Minute.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      children: [
        {
          path: '/quotidien',
          name: 'Daily',
          component: Daily
        },
        {
          path: '/horaire',
          name: 'Hourly',
          component: Hourly
        },
        {
          path: '/minute',
          name: 'Minute',
          component: Minute
        }
      ]
    }
  ],
})

export default router
