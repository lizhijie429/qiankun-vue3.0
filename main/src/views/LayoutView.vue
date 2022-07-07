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
import LayoutView from '@/layout/LayoutView.vue'
import { getStorage } from '@/utils/storage'
import { useMenuRouterStore } from '@/stores/menu-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
const route = useRoute()
const menuRouterStore = useMenuRouterStore()
const isMain = ref<boolean>(false)
onMounted(() => {
  isMainPage(route)
  menuRouterStore.setCurrentModule(getStorage('currentModule'))
  menuRouterStore.setCurrentPage(getStorage('currentPage'))
})
watch(
  () => route.path,
  () => isMainPage(route)
)
const isMainPage = (value: RouteLocationNormalizedLoaded) => {
  if (value.meta.moduleName === 'main') {
    isMain.value = true
  } else {
    isMain.value = false
  }
}
</script>

<style lang="scss" scoped></style>
