<template>
  <el-aside width="auto">
    <div class="logo-container">
      <Transition name="bounce">
        <div v-if="collapse" class="site-name">A</div>
        <div v-else class="site-name">ADMIN LITE</div>
      </Transition>
    </div>
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
  width: 240px;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  line-height: 64px;
  background: #002140;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
}
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
