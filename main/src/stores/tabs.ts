import type { MenuItem, TabsData } from '@/interface/menu'
import { defineStore } from 'pinia'
import type { Router } from 'vue-router'
import { useMenuRouterStore } from './menu-router'

export const useTabsStore = defineStore({
  id: 'tabs',
  state: () =>
    ({
      tabsList: []
    } as TabsData),
  getters: {
    getMenuStore() {
      return useMenuRouterStore()
    }
  },
  actions: {
    // 新增tabs
    addTabsItem(value: MenuItem, router: Router) {
      if (this.tabsList && this.tabsList.length < 10) {
        const hasTabsItem = this.tabsList.filter((item) => {
          return item && item.name === value.name
        })
        if (!hasTabsItem.length) {
          this.tabsList.push(value)
        }
        this.getMenuStore.setCurrentModule(value.moduleName)
        this.getMenuStore.setCurrentPage(value.name)
        router.push({ name: value.name })
      }
    },

    // 删除最后一个tabs标签
    removeLastTab(value: MenuItem, router: Router) {
      if (this.tabsList && this.tabsList.length > 1) {
        // 第一步、删除
        this.tabsList.forEach((item, index) => {
          if (item.name === value.name) {
            this.tabsList && this.tabsList.splice(index, 1)
          }
        })
        // 第二步、获取最后一个tabs的name跳转路由
        const index = this.tabsList.length - 1
        const lastTabsItem = this.tabsList[index]
        this.getMenuStore.setCurrentModule(lastTabsItem.moduleName)
        this.getMenuStore.setCurrentPage(lastTabsItem.name)
        router.push({ name: lastTabsItem.name })
      }
    },
    // 删除除了第一个跟最后一个以外得任何一个tab标签
    removeAnyTab(value: MenuItem, router: Router, indexOf: number | undefined) {
      const tabsListLength = this.tabsList && this.tabsList.length
      if (
        this.tabsList &&
        this.tabsList.length > 1 &&
        indexOf &&
        tabsListLength &&
        indexOf < tabsListLength
      ) {
        if (value.name === this.getMenuStore.currentPage) {
          this.tabsList.forEach((item, index) => {
            if (item.name === value.name) {
              this.tabsList && this.tabsList.splice(index, 1)
            }
          })
          const nextTabsItem = this.tabsList[indexOf]
          this.getMenuStore.setCurrentModule(nextTabsItem.moduleName)
          this.getMenuStore.setCurrentPage(nextTabsItem.name)
          router.push({ name: nextTabsItem.name })
        } else {
          this.tabsList.forEach((item, index) => {
            if (item.name === value.name) {
              this.tabsList && this.tabsList.splice(index, 1)
            }
          })
        }
      }
    },
    // 关闭其他
    closeOther() {
      if (this.tabsList) {
        this.tabsList = this.tabsList.filter((item) => {
          return item && item.name === this.getMenuStore.currentPage
        })
      }
    },
    closeLeftOrRight(value: string) {
      if (this.tabsList) {
        const indexOf = this.tabsList?.findIndex(
          (item) => item.name === this.getMenuStore.currentPage
        )
        if (this.tabsList.length - 1 === indexOf) return
        this.tabsList =
          value === 'closeLeft'
            ? this.tabsList.filter((item, index) => index >= indexOf)
            : this.tabsList.filter((item, index) => index <= indexOf)
      }
    }
  }
})
