<script setup lang=ts>
import { ref, computed } from 'vue';

const name = ref('Vue 3 with TypeScript');

type Todo = { id: number; title: string; completed: boolean };
// Hardcoded (pseudo) todo data
const todos = ref<Todo[]>([
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Write report', completed: true },
  { id: 3, title: 'Call Alice', completed: false },
]);


const hoge = computed(() => todos.value.filter((i) => i.completed == false));

const newTitle = ref('');
// compute next id from existing todos
const nextId = ref(Math.max(0, ...todos.value.map((t) => t.id)) + 1);
function addTodo() {
  const title = newTitle.value;
  todos.value.push({ id: nextId.value++, title, completed: false });
  newTitle.value = '';
}
</script>

<template>
  <div id="app">

    <section class="todo-app">
      <h2>Todos ({{ num_completed }})</h2>

      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
          style="display:flex; align-items:center; gap:0.5rem; margin:0.25rem 0;"
        >
          <input type="checkbox" v-model="todo.completed" />
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
            {{ todo.title }}
          </span>
        </li>
      </ul>
    </section>
    <AddTodo v-model:todos="todos" />
  </div>
</template>