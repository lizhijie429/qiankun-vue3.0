<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <jsx-demo></jsx-demo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JsxDemo from "./JsxDemo";

export default defineComponent({
  name: "Home",
  components: {
    JsxDemo,
  },
});
</script>
