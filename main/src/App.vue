<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
export default defineComponent({
  name: "Home",
  data() {
    return {
      locale: zhCN,
    };
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
