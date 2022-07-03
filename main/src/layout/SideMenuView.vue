<template>
  <el-aside width="200px">
    <LogoView></LogoView>
    <el-menu
      style="height: calc(100% - 60px)"
      class="el-menu-vertical-demo"
      default-active="2"
      background-color="#00142a"
      text-color="hsla(0, 0%, 100%, .65)"
      active-text-color="#409EFF"
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
</script>

<style lang="scss" scoped>
:deep(.el-menu) {
  border-right: none;
}
</style>
