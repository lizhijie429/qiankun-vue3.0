<template>
  <div class="tabs-box flex-row flex-items-center">
    <div
      class="tabs-item paas-flex-cc"
      v-for="item in tabsStore.tabsList"
      :key="item.name"
      :class="
        item.path === menuRouterStore.currentPage ? 'tabs-item-hover' : 'null'
      "
      @contextmenu.prevent.capture
    >
      <div
        class="cursor-pointer fs-14 tabs-item-text"
        @click="handleClick(item)"
      >
        {{ item.title }}
      </div>
      <div
        class="tabs-close-icon cursor-pointer flex-row flex-items-center"
        @click="closeTab(item)"
      >
        <close-bold></close-bold>
      </div>
    </div>
    <div
      class="tabs-item cursor-pointer arrow-down"
      ref="buttonRef"
      @click="onClickOutside"
    >
      <el-icon><ArrowDownBold /></el-icon>
    </div>
  </div>
  <el-popover
    ref="popoverRef"
    trigger="hover"
    virtual-triggering
    :virtual-ref="buttonRef"
  >
    <div class="arrow-down-item" @click="handleCommand('refresh')">刷新</div>
    <div class="arrow-down-item" @click="handleCommand('closeOther')">
      关闭其他
    </div>
    <div class="arrow-down-item" @click="handleCommand('closeLeft')">
      关闭左侧
    </div>
    <div class="arrow-down-item" @click="handleCommand('closeRight')">
      关闭右侧
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { CloseBold, ArrowDownBold } from '@element-plus/icons-vue'
import type { MenuItem } from '@/interface/menu'
import { useMenuRouterStore } from '@/stores/menu-router'
import { useTabsStore } from '@/stores/tabs'
import { useAppStore } from '@/stores/app'
const router = useRouter()
const menuRouterStore = useMenuRouterStore()
const tabsStore = useTabsStore()
const appStore = useAppStore()
// tabs功能操作
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
const handleCommand = (command: string) => {
  if (command === 'refresh') {
    appStore.isLoading = true
    appStore.isRouterAlive = false
    setTimeout(() => {
      appStore.isRouterAlive = true
      appStore.isLoading = false
    }, 500)
  } else if (command === 'closeOther') {
    tabsStore.closeOther()
  } else {
    tabsStore.closeLeftOrRight(command)
  }
}
// 点击tab跳转页面
const handleClick = (value: MenuItem) => {
  if (menuRouterStore.currentPage === value.name) return false
  menuRouterStore.setCurrentPage(value.path)
  tabsStore.addTabsItem(value, router)
}
// 通过tab关闭页面
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
        color: var(--el-color-primary);
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
      background-color: var(--el-color-primary);
    }
  }
  .tabs-item:last-child {
    border-right: none !important;
  }
}
.arrow-down {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.arrow-down .el-icon:hover {
  color: var(--el-color-primary);
}
.arrow-down-item {
  padding: 5px 0px;
  cursor: pointer;
}
.arrow-down-item:hover {
  color: var(--el-color-primary);
}
.tabs-item-hover {
  color: var(--el-color-primary) !important;
}
</style>
