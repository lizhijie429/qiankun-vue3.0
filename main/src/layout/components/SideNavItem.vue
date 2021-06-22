<!--
 * @Author: lizhijie429
 * @Date: 2021-06-19 11:30:18
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-22 14:49:55
 * @Description: 
-->
<template>
  <div>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item>
    <el-submenu index="5">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template #title>分组一</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="5-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideNavItem",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
