<template>
  <div id="app">
    <h1>学生管理系统</h1>
  <p>
    <router-link to="/">滨海  </router-link>
    <router-link to="/chashan">茶山  </router-link>
    <router-link to="/yueqing">乐清  </router-link>
    <router-link to="/login">学生管理系统</router-link>
    <br>
  </p>
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  name: 'app'
}
</script>
 
<style>
</style>