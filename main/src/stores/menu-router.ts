import { defineStore } from 'pinia'
import { httpGet } from '@/utils/http'
import type { MenuRouterState, MenuItem } from '@/interface/menu'
import { setStorage } from '@/utils/storage'
import type { RouteRecordRaw } from 'vue-router'
const LayoutView = import.meta.glob('@/views/LayoutView.vue')

export const useMenuRouterStore = defineStore({
  id: 'menuRouter',
  state: () =>
    ({
      menuList: null,
      routes: [],
      currentModule: 'home',
      sideMenu: null,
      currentPage: '/home'
    } as MenuRouterState),
  actions: {
    /**
     * @description 设置当前顶部导航选中的菜单
     * @param value 菜单数据中的name字段
     */
    setCurrentModule(value: string) {
      if (value === 'home' && this.menuList) {
        for (let index = 0; index < this.menuList.length; index++) {
          const item = this.menuList[index]
          if (item.moduleName === 'home') {
            this.sideMenu = [item]
            break
          }
        }
      }
      setStorage('currentModule', value)
      this.currentModule = value
    },
    /**
     * @description 设置当前左侧导航选中的菜单
     * @param value 菜单数据中的path字段
     */
    setCurrentPage(value: string) {
      setStorage('currentPage', value)
      this.currentPage = value
    },
    /**
     * @description 设置当前选中的路由及左侧按钮数据
     * @param value 菜单数据中的name字段
     */
    setSideMenu(value: string) {
      this.currentModule = value
      this.menuList?.forEach((item) => {
        if (item.name === value && item.menuList && item.menuList.length > 0) {
          this.sideMenu = item.menuList
        }
      })
    },
    /**
     * @description 获取路由及导航数据
     */
    async getMenuList(): Promise<Array<RouteRecordRaw>> {
      const data = (await httpGet('./mock/menu.json')) as Array<MenuItem>
      this.menuList = [...data]
      this.routes = getRouterItem(data)
      return this.routes
    }
  }
})

function getRouterItem(menuList: Array<MenuItem>): Array<RouteRecordRaw> {
  let routeList: Array<RouteRecordRaw> = []
  for (let index = 0; index < menuList.length; index++) {
    const item = menuList[index]
    if (item.moduleName === 'home') {
      continue
    }
    if (item.menuList) {
      item.menuList.length > 0
        ? (routeList = [...routeList, ...getRouterItem(item.menuList)])
        : routeList.push({
            path: item.path,
            name: item.name,
            component: LayoutView,
            meta: { moduleName: item.moduleName }
          })
    } else {
      routeList.push({
        path: item.path,
        name: item.name,
        component: LayoutView,
        meta: { moduleName: item.moduleName }
      })
    }
  }
  return routeList
}
