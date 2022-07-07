<template>
  <router-view> </router-view>
</template>
<script setup lang="ts">
import { getStorage } from '@/utils/storage'
import { useMenuRouterStore } from '@/stores/menu-router'
const menuRouterStore = useMenuRouterStore()
onMounted(() => {
  menuRouterStore.setCurrentModule(getStorage('currentModule'))
  menuRouterStore.setCurrentPage(getStorage('currentPage'))
})
</script>
<style>
@import '@/assets/base.css';

#app {
  height: 100%;
  margin: 0 auto;
  font-weight: normal;
}
.el-container {
  height: 100%;
}
</style>
