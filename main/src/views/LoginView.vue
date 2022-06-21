<template>
  <div class="home">
    <div>main登录页面</div>
    <el-button type="primary" @click="toHome">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(() => {
  sessionStorage.removeItem("currentApp");
  sessionStorage.removeItem("currentPage");
});
const toHome = () => {
  // store.commit("permission/UPDATE_CURRENT_MODULE_NAME", "main");
  // store.commit("permission/UPDATE_CURRENT_PAGE", "/home");
  router.push("/home");
};
</script>
