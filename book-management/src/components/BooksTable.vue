<template>
  <div>
    <el-table :data="books" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="title" label="Title"></el-table-column>
      <el-table-column prop="author" label="Author"></el-table-column>
      <el-table-column prop="copies" label="Copies"></el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button @click="deleteBook(scope.row.id)" type="danger" size="mini">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="showAddBookDialog = true">Add New Book</el-button>
    <el-dialog :visible.sync="showAddBookDialog">
      <div>
        <el-form :model="newBook">
          <el-form-item label="Title">
            <el-input v-model="newBook.title"></el-input>
          </el-form-item>
          <el-form-item label="Author">
            <el-input v-model="newBook.author"></el-input>
          </el-form-item>
          <el-form-item label="Copies">
            <el-input type="number" v-model="newBook.copies"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="showAddBookDialog = false">Cancel</el-button>
          <el-button type="primary" @click="addBook">Add</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
      {"id": 1, "title": "Python编程", "author": "John Doe", "copies": 4},
      {"id": 2, "title": "历史的秘密", "author": "Jane Smith", "copies": 3},
      {"id": 3, "title": "宇宙探索", "author": "Emily Brown", "copies": 2},
      {"id": 4, "title": "健康生活", "author": "Mike Johnson", "copies": 5},
      {"id": 5, "title": "数学之美", "author": "Sarah Lee", "copies": 4},
      {"id": 6, "title": "艺术欣赏", "author": "David White", "copies": 3},
      {"id": 7, "title": "编程入门", "author": "Alice Green", "copies": 2},
      {"id": 8, "title": "科幻世界", "author": "Frank Black", "copies": 5},
      {"id": 9, "title": "自然奇观", "author": "Grace Blue", "copies": 4},
      {"id": 10, "title": "音乐之声", "author": "Tom Red", "copies": 3}
      ],
      showAddBookDialog: false,
      newBook: {
        title: '',
        author: '',
        copies: 0
      }
    };
  },
  methods: {
    addBook() {
      const newId = this.books.length + 1; // Simple ID assignment
      this.books.push({ ...this.newBook, id: newId });
      this.showAddBookDialog = false;
      this.newBook = { title: '', author: '', copies: 0 }; // Reset form
    },
    deleteBook(id) {
      this.books = this.books.filter(book => book.id !== id);
    }
  }
};
</script>
