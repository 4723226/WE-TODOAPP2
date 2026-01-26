import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
    id: number
    title: string
    completed: boolean
}

export const useTodosStore = defineStore('todos', () => {
    let serialId = 4
    const todos = ref<Todo[]>([
        { id: 1, title: 'Buy groceries', completed: false },
        { id: 2, title: 'Write report', completed: true },
        { id: 3, title: 'Call Alice', completed: false },
    ])
    const fetchTodos = async () => {
    const response = await fetch('http://127.0.0.1:8001/todos')
    todos.value = await response.json()
    }
    const addTodo = async (title: string) => {
        const response = await fetch('http://127.0.0.1:8001/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
       })
        const newTodo: Todo = await response.json()
        todos.value.push(newTodo)
    }
    const removeTodo = (id: number) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }
    return { todos, addTodo, removeTodo, fetchTodos }
})