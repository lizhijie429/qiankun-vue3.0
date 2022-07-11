<template>
  <layout-view>
    <div v-if="isMain" style="height: 100%">
      <router-view
        v-if="appStore.isRouterAlive"
        v-slot="{ Component }"
        class="height-abs"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div v-else style="height: 100%">
      <div v-if="appStore.isRouterAlive">业务模块--{{ route.name }}</div>
    </div>
  </layout-view>
</template>

<script setup lang="ts">
import LayoutView from '@/layout/LayoutView.vue'
import { getStorage } from '@/utils/storage'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useMenuRouterStore, getMenuList } from '@/stores/menu-router'
import { useTabsStore } from '@/stores/tabs'
import router from '@/router'
const route = useRoute()
const appStore = useAppStore()
const tabsStore = useTabsStore()
const menuRouterStore = useMenuRouterStore()
const isMain = ref<boolean>(false)
onMounted(() => {
  isMainPage(route)
  const currentModule = getStorage('currentModule')
  const currentPage = getStorage('currentPage')
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const menuList = getMenuList(menuRouterStore.menuList!)
  if (
    currentModule &&
    currentModule !== 'null' &&
    currentPage &&
    currentPage !== 'null'
  ) {
    menuRouterStore.setCurrentModule(currentModule)
    menuRouterStore.setCurrentPage(currentPage)
    menuList.forEach(
      (item) => item.name === currentPage && tabsStore.addTabsItem(item, router)
    )
  } else {
    menuRouterStore.setCurrentModule(route.meta.moduleName as string)
    menuRouterStore.setCurrentPage(route.name as string)
    menuList.forEach(
      (item) => item.name === route.name && tabsStore.addTabsItem(item, router)
    )
  }
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
