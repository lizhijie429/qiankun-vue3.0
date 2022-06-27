<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
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
import { ref } from "vue";
import { useMenuRouterStore } from "@/stores/menu-router.ts";
const menuRouterStore = useMenuRouterStore();
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped></style>
