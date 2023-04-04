import { createRouter, createWebHistory } from 'vue-router'
import Daily from './pages/Daily.vue'
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
        }
      ]
    }
  ],
})

export default router
