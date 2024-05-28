<template>
  <div id="app">
    <books-table></books-table>
  </div>
</template>

<script>
import BooksTable from './components/BooksTable.vue';

export default {
  name: 'App',
  components: {
    BooksTable
  }
};
</script>

