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
        :index="subMenuitem.path"
        @click="jumpPage(subMenuitem)"
      >
        <el-icon><icon-menu /></el-icon> <span>{{ subMenuitem.title }}</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item
      v-else-if="menuItem.type === 'menu'"
      :index="menuItem.path"
      @click="jumpPage(menuItem)"
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
import { useTabsStore } from '@/stores/tabs'
const router = useRouter()
const props = defineProps<{ menuData: Array<MenuItem> }>()
const menuRouterStore = useMenuRouterStore()
const tabsStore = useTabsStore()
const jumpPage = (menu: MenuItem) => {
  menuRouterStore.setCurrentPage(menu.path)
  tabsStore.addTabsItem(menu, router)
}
</script>

<style scoped></style>
