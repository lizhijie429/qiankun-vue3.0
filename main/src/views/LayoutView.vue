<template>
  <LayoutView>
    <router-view v-slot="{ Component }" class="height-abs">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </LayoutView>
</template>

<script setup lang="ts">
import LayoutView from "@/layout/LayoutView.vue";
</script>
