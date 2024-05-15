<template>
    <div :class="{ 'is-completed': completed }">
      <input type="checkbox"  @change="toggleCompletion">
      {{ title }}
      <button @click="removeTodo">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      completed: Boolean
    },
    methods: {
      toggleCompletion() {
        this.$emit('update:completed', !this.completed);
      },
      removeTodo() {
        this.$emit('remove-todo');
      }
    }
  }
  </script>
  
  <style scoped>
  .is-completed {
    text-decoration: line-through;
  }
  </style>
  