<template>
  <div class="tabs-box flex-row flex-items-center">
    <div
      class="tabs-item paas-flex-cc"
      v-for="item in tabsStore.tabsList"
      :key="item.name"
      :class="
        item.name === menuRouterStore.currentPage ? 'tabs-item-hover' : 'null'
      "
    >
      <span
        class="cursor-pointer fs-14 tabs-item-text"
        @click="handleClick(item)"
        >{{ item.title }}</span
      >
      <div
        class="tabs-close-icon cursor-pointer flex-row flex-items-center"
        @click="closeTab(item)"
      >
        <close-bold></close-bold>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CloseBold } from '@element-plus/icons-vue'
import type { MenuItem } from '@/interface/menu'
import { useMenuRouterStore } from '@/stores/menu-router'
import { useTabsStore } from '@/stores/tabs'
const router = useRouter()
const menuRouterStore = useMenuRouterStore()
const tabsStore = useTabsStore()
/**
 * @description 点击tab跳转页面
 */
const handleClick = (value: MenuItem) => {
  if (menuRouterStore.currentPage === value.name) return false
  menuRouterStore.setCurrentPage(value.name)
  tabsStore.addTabsItem(value, router)
}
/**
 * @description 通过tab关闭页面
 */
const closeTab = (value: MenuItem) => {
  let lastIndexOf = tabsStore.tabsList && tabsStore.tabsList.length - 1
  let indexOf = tabsStore.tabsList?.findIndex(
    (item) => item.name === value.name
  )
  lastIndexOf === indexOf
    ? tabsStore.removeLastTab(value, router)
    : tabsStore.removeAnyTab(value, router, indexOf)
}
</script>

<style lang="scss" scoped>
.tabs-box {
  height: 54px;
  padding: 10px;
  .tabs-item {
    height: 100%;
    padding: 0 12px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    line-height: 34px;
    white-space: nowrap;
    position: relative;
    .tabs-item-text {
      padding-right: 10px;
      &:hover {
        color: #23b7e5;
      }
    }
    .tabs-close-icon {
      width: 14px;
      height: 14px;
      margin-left: 2px;
      padding: 2px;
      cursor: pointer;
      position: absolute;
      right: 4px;
      top: calc(50% - 6px);
    }
    .tabs-close-icon:hover {
      border-radius: 50%;
      color: #fff;
      background-color: #23b7e5;
    }
  }
  .tabs-item:last-child {
    border-right: none !important;
  }
}
.tabs-item-hover {
  color: #23b7e5 !important;
}
</style>
