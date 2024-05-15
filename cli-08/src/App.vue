<template>
  <div id="app">
    <h1>自律一下</h1>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
/* Add your styles here */
</style>
