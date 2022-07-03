<template>
  <div v-for="menuItem in props.menuData" :key="menuItem.name">
    <el-sub-menu v-if="menuItem.type === 'catalogue'" :index="menuItem.name">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>{{ menuItem.title }}</span>
      </template>
      <el-menu-item
        v-for="subMenuitem in menuItem.menuList"
        :key="subMenuitem.name"
        :index="subMenuitem.name"
      >
        <el-icon><icon-menu /></el-icon> <span>{{ subMenuitem.title }}</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item v-else-if="menuItem.type === 'menu'" :index="menuItem.name">
      <el-icon><icon-menu /></el-icon>
      <span>{{ menuItem.title }}</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue'
import type { MenuItem } from '@/stores/menu-router'
const props = defineProps({menuData:Array<MenuItem>})
console.log('props', props)
</script>

<style scoped></style>
