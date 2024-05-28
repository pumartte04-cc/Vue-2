<template>
    <div>
      <br><h3>登录</h3>
      <input v-model="username" placeholder="用户名">
      <input type="password" v-model="password" placeholder="密码">
      <button @click="login">登录</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.username === 'wuyanrui' && this.password === '22219111306') {
          localStorage.setItem('isLoggedIn', 'true');
          this.$router.push('/student-system');
        } else {
          alert('用户名或密码错误');
        }
      }
    }
  }
  </script>