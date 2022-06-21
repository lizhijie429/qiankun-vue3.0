<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<style>
@import "@/assets/base.css";

#app {
  height: 100%;
  margin: 0 auto;
  font-weight: normal;
}
.el-container {
  height: 100%;
}
</style>
