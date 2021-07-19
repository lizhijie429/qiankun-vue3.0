<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  font-size: 625%;
  -webkit-text-size-adjust: 100%; // 4
  -ms-text-size-adjust: 100%; // 4
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // 6
  height: 100%;
  max-height: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  max-height: 100%;
  font-size: 14px;
  font-family: "Microsoft YaHei", "微软雅黑", "MicrosoftJhengHei", "STHeiti", "MingLiu";
  color: #303133;
}
#app {
  height: 100%;
  background-color: #f0f2f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
