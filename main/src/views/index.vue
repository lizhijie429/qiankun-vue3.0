<template>
  <div id="subView"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { registerApps } from "../qiankun/index";
export default defineComponent({
  mounted() {
    let tem: any = window;
    if (!tem.qiankunStarted) {
      tem.qiankunStarted = true;
      registerApps();
    }
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
