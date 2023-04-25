<script setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/TodoStore";

let task = ref('')
const store = useTodoStore()

const addTaskAndClear = function () {
    if (this.task.trim() === '') return;
    store.addTask(this.task);
    this.task = '';
}
</script>

<template>
    <form @submit.prevent="addTaskAndClear()">
        <input type="text" placeholder="anything to do ?" v-model="task">
        <button>Add</button>
    </form>
</template>
