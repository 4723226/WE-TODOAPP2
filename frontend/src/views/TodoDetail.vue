<script set up lang="ts">
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
      {{ todoStore.todos[id-1]}}
   </section>
</template>