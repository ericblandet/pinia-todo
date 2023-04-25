<script setup>
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/TodoStore';

const store = useTodoStore()
const storeRefs = storeToRefs(store)
const tasks = storeRefs.tasks

const deleteTask = function (task) {
    store.deleteTask(task);
}

const completeTask = function (task) {
    store.completeTask(task);
}
</script>

<template>
    <ul v-for="task in tasks" :key="id">
        <li><span :style="task.completed ? 'color:green' : ''" v-html="task.content"> </span>
            <button style="color:green" @click="completeTask(task)">✔</button>
            <button style="color:red" @click="deleteTask(task)">⤫</button>
        </li>
    </ul>
</template>
