<template>
  <el-header class="header-nav">
    <el-icon class="collapse-icon" :size="28" @click="changeCollapse">
      <expand v-if="props.collapse"></expand>
      <fold v-else></fold>
    </el-icon>
    <el-menu
      class="header-nav-menu"
      style="flex: 1"
      mode="horizontal"
      :default-active="menuRouterStore.currentModule"
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
import { Expand, Fold } from '@element-plus/icons-vue'
const router = useRouter()
const menuRouterStore = useMenuRouterStore()
const props = defineProps<{ collapse: boolean }>()
const emits = defineEmits(['update:collapse'])
const changeCollapse = () => {
  emits('update:collapse', !props.collapse)
}
const handleSelect = (key: string) => {
  if (key === 'home') {
    menuRouterStore.setCurrentModule('home')
    menuRouterStore.setCurrentPage('/home')
    router.push({ name: key })
    return
  }
  menuRouterStore.setSideMenu(key)
}
</script>

<style scoped>
.header-nav {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: solid 1px var(--el-menu-border-color);
}
.collapse-icon {
  width: 60px;
  cursor: pointer;
}
.header-nav-menu {
  border-bottom: none;
}
</style>
