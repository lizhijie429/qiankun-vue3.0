<template>
  <layout>
    <router-view v-if="isMain" class="height-abs"></router-view>
    <div v-else id="subapp-viewport" class="app-view-box"></div>
  </layout>
</template>

<script lang="ts">
import Layout from "../layout/index.vue";
import registerApps from "../qiankun/index";
import { computed, defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    Layout,
  },
  setup() {
    const route = useRoute();
    const isMain = computed(() => route.meta.isMain);
    onMounted(() => {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true;
        registerApps();
      }
    });
    return {
      isMain,
    };
  },
});
</script>
