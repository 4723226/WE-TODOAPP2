<script setup lang="ts">
    import { useTodosStore } from '../stores/todoStore';
    import { useRoute } from 'vue-router';
    const todoStore = useTodosStore();
    const route = useRoute();
    const todoId = Number(route.params.id);
    const todo = todoStore.todos.find(t => t.id === todoId);
</script>

<template>
   <section>
      <h2>Todo Details</h2>
      <div v-if="todo">
         <p>ID: {{ todo.id }}</p>
         <p>Title: {{ todo.title }}</p>
         <p>Completed: {{ todo.completed }}</p>
      </div>
      <div v-else>
         <p>Todo not found (ID: {{ todoId }})</p>
      </div>
   </section>
</template>