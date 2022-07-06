<template>
  <layout-view>
    <div v-if="isMain">
      <router-view v-slot="{ Component }" class="height-abs">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div v-else>业务模块</div>
  </layout-view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LayoutView from '@/layout/LayoutView.vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()
const isMain = ref<boolean>(false)
onMounted(() => {
  isMainPage(route)
})
const isMainPage = (value: RouteLocationNormalizedLoaded) => {
  if (value.meta.moduleName === 'main') {
    isMain.value = true
  } else {
    isMain.value = false
  }
}
</script>

<style lang="scss" scoped></style>
