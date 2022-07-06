<template>
  <el-aside width="auto">
    <LogoView></LogoView>
    <el-menu
      style="height: calc(100% - 60px)"
      class="el-menu-vertical-demo"
      background-color="#00142a"
      text-color="hsla(0, 0%, 100%, .65)"
      active-text-color="#409EFF"
      :collapse="props.collapse"
      :default-active="menuRouterStore.currentPage"
      :router="true"
    >
      <SubMenuView
        v-if="menuRouterStore.sideMenu"
        :menuData="menuRouterStore.sideMenu"
      ></SubMenuView>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import LogoView from './LogoView.vue'
import SubMenuView from './SubMenuView.vue'
import { useMenuRouterStore } from '@/stores/menu-router'
const menuRouterStore = useMenuRouterStore()
const props = defineProps<{ collapse: boolean }>()
</script>

<style lang="scss" scoped>
:deep(.el-menu) {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
