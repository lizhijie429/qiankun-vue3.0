<template>
  <el-header class="header-nav">
    <el-menu
      class="el-menu-demo"
      style="flex: 1"
      mode="horizontal"
      :default-active="menuRouterStore.activeIndex"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="item in menuRouterStore.menuList"
        :key="item.name"
        :index="item.name"
      >
        {{ item.title }}
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMenuRouterStore } from '@/stores/menu-router'
const menuRouterStore = useMenuRouterStore()
const router = useRouter()
const handleSelect = (key: string) => {
  if (key === 'home') {
    router.push({ name: key })
    return
  }
  menuRouterStore.setSideMenu(key)
}
</script>

<style scoped>
.header-nav {
  width: 100%;
}
</style>
