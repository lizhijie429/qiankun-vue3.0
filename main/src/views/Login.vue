<template>
  <div class="home">
    <h1>main登录页面</h1>
    <el-button type="primary" @click="toHome">登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    sessionStorage.removeItem("currentMenu");
    sessionStorage.removeItem("currentPage");
  },
  methods: {
    // 跳转首页
    toHome() {
      console.log(process.env.VUE_APP_DEFAULT_APP);
      this.$router.push(process.env.VUE_APP_DEFAULT_APP);
    },
  },
};
</script>
