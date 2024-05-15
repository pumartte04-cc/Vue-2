<template>
    <div>
      <input v-model="newTodoTitle" @keyup.enter="addTodo" placeholder="Add a new todo">
      <ul>
        <li v-for="todo in todos" :key="todo.title">
          <todo-item
            :title="todo.title"
            :completed="todo.completed"
            @update:completed="updateTodoCompleted(todo)"
            @remove-todo="removeTodo(todo)"
          />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  
  export default {
    components: {
      TodoItem
    },
    data() {
      return {
        todos: [],
        newTodoTitle: ''
      };
    },
    methods: {
      addTodo() {
        if (this.newTodoTitle.trim()) {
          this.todos.push({ title: this.newTodoTitle, completed: false });
          this.newTodoTitle = '';
        }
      },
      removeTodo(todo) {
        this.todos = this.todos.filter(t => t !== todo);
      },
      updateTodoCompleted(todo) {
        todo.completed = !todo.completed;
      }
    }
  }
  </script>
  