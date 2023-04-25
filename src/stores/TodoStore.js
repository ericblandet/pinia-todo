import { defineStore } from 'pinia'

export const useTodoStore = defineStore('TodoStore', {
  state: () => ({
    tasks: [
      // { content: 'salut ça va', id: 1, completed: false }
    ],
    id: 0,
  }),

  actions: {
    addTask(content) {
      this.tasks.push({ content, id: this.id++, completed: false })
    },
    completeTask(task) {
      this.tasks.find((el) => el == task).completed = true
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((el) => el != task)
    },
  },

  getters: {
    incompleteTasks() {
      return this.tasks.filter((task) => !task.completed)
    },
  },
})
