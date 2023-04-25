import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../views/Todo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Todo
    }
  ]
})

export default router
