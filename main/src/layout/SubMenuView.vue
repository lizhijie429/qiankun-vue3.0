<template>
  <template v-for="menuItem in props.menuData" :key="menuItem.name">
    <el-sub-menu v-if="menuItem.type === 'catalogue'" :index="menuItem.path">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>{{ menuItem.title }}</span>
      </template>
      <el-menu-item
        v-for="subMenuitem in menuItem.menuList"
        :key="subMenuitem.name"
        :index="subMenuitem.name"
        @click="jumpPage(subMenuitem.name)"
      >
        <el-icon><icon-menu /></el-icon> <span>{{ subMenuitem.title }}</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item
      v-else-if="menuItem.type === 'menu'"
      :index="menuItem.name"
      @click="jumpPage(menuItem.name)"
    >
      <el-icon><icon-menu /></el-icon>
      <span>{{ menuItem.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue'
import type { MenuItem } from '@/interface/menu'
import { useMenuRouterStore } from '@/stores/menu-router'
const router = useRouter()
const props = defineProps<{ menuData: Array<MenuItem> }>()
const menuRouterStore = useMenuRouterStore()
const jumpPage = (name: string) => {
  menuRouterStore.setCurrentPage(name)
  router.push({ name: name })
}
</script>

<style scoped></style>
