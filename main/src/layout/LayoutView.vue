<template>
  <div class="common-layout">
    <el-container>
      <SideMenuView :collapse="isCollapse"></SideMenuView>
      <el-container>
        <NavMenuView v-model:collapse="isCollapse"></NavMenuView>
        <TabsView></TabsView>
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideMenuView from './SideMenuView.vue'
import NavMenuView from './NavMenuView.vue'
import TabsView from './TabsView.vue'
const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.el-header,
.el-footer {
  padding: 0;
  color: #333;
  text-align: center;
  background-color: #fff;
}
.el-footer {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.el-main {
  margin: 0 0.1rem 0.1rem;
  padding: 0.2rem;
  background-color: #fff;
}
</style>
