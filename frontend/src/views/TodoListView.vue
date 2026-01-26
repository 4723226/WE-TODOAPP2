<script setup lang="ts">
    import { useTodosStore } from '../stores/todoStore';
    import AddTodo from '../components/AddTodo.vue';
    import { RouterLink } from 'vue-router';
    import { onMounted } from 'vue';
    const todoStore = useTodosStore();

    onMounted(() => {
        todoStore.fetchTodos();
    });
</script>

<template>
<section>
    <h2>Todos</h2>
    <ul>
        <li
            v-for="todo in todoStore.todos"
            :key="todo.id"
            style="display:flex; align-items:center; gap:0.5rem; margin:0.25rem 0;"
        >
            <input type="checkbox" v-model="todo.completed" />
            <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
                <router-link :to="{name:'TodoDetail',params: { id: todo.id }}">{{ todo.title }}</router-link>
            </span>
            <button v-on:click="todoStore.removeTodo(todo.id)">Remove</button>
        </li>
    </ul>
</section>
<section>
    <AddTodo />
</section>
</template>