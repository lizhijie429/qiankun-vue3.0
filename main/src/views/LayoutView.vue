<template>
  <LayoutView>
    <keep-alive>
      <router-view class="height-abs"></router-view>
    </keep-alive>
  </LayoutView>
</template>

<script setup lang="ts">
import LayoutView from "@/layout/LayoutView.vue";
// import { registerApps } from "@/qiankun/index";
// const SubAppViewport = {
//   name: "SubAppViewport",
//   template: `<div id="subApp-viewport" class="app-view-box"></div>`,
// };
</script>
