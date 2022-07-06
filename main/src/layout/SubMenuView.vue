<template>
  <div v-for="menuItem in props.menuData" :key="menuItem.name">
    <el-sub-menu v-if="menuItem.type === 'catalogue'" :index="menuItem.path">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>{{ menuItem.title }}</span>
      </template>
      <el-menu-item
        v-for="subMenuitem in menuItem.menuList"
        :key="subMenuitem.name"
        :index="subMenuitem.path"
        @click="jumpPage(subMenuitem.path)"
      >
        <el-icon><icon-menu /></el-icon> <span>{{ subMenuitem.title }}</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item
      v-else-if="menuItem.type === 'menu'"
      :index="menuItem.path"
      @click="jumpPage(menuItem.path)"
    >
      <el-icon><icon-menu /></el-icon>
      <span>{{ menuItem.title }}</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'
import type { MenuItem } from '@/interface/menu'
const router = useRouter()
const props = defineProps<{ menuData: Array<MenuItem> }>()
console.log('props', props)
const jumpPage = (path: string) => {
  router.push({ path: path })
}
</script>

<style scoped></style>
