<template>
  <div>
    <div><br>你好,这里是温州理工滨海校区</div>
    <input v-model="studentId" placeholder="输入学号">
    <button @click="fetchStudentInfo">查找学生信息</button>
    <div v-if="studentInfo">
      学生信息: {{ studentInfo }}
    </div>
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      studentId: '',
      studentInfo: null
    };
  },
  methods: {
    fetchStudentInfo() {
      // 假设这里调用API获取学生信息
      this.studentInfo = '学生姓名: wyr'; // 示例数据
    }
  }
}
</script>
