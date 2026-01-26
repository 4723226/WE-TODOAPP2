<script setup lang="ts">
    import { useTodosStore } from '../stores/todoStore';
    import AddTodo from '../components/AddTodo.vue';
    import { useRouter } from 'vue-router';
    const todoStore = useTodosStore();
    const router = useRouter();
</script>
<template>
<section>
    <h2>Todo List</h2>
    <ul>
    <li
        v-for="todo in todoStore.todos"
        :key="todo.id"
        style="display:flex; align-items:center; gap:1.5rem; margin:1.25rem 0;"
    >
        <input type="checkbox" v-model="todo.completed" />
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
        {{ todo.title }}
        </span>
        <button @click="router.push('/about')">About</button>
    </li>
    </ul>
</section>
<section>
    <AddTodo />
</section>
</template>