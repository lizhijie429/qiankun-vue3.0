import { defineStore } from 'pinia'
import { httpGet } from '@/utils/http'

export interface MenuItem {
  title: string
  moduleName: string
  name: string
  path: string
  component?: string
  menuList?: Array<MenuItem>
  type: string
  icon: string
  meta: {
    isTabs: boolean
    isSide: boolean
  }
}

export interface MenuRouterState {
  menuList: null | Array<MenuItem>
  routes: null | Array<unknown>
  activeIndex: string
  sideMenu: null | Array<MenuItem>
}

export const useMenuRouterStore = defineStore({
  id: 'menuRouter',
  state: () =>
    ({
      menuList: null,
      routes: null,
      activeIndex: 'home',
      sideMenu: null
    } as MenuRouterState),
  actions: {
    /**
     * @description 设置当前顶部导航选中的菜单
     * @param value 菜单数据中的name字段
     */
    setActiveIndex(value: string) {
      this.activeIndex = value
    },

    /**
     * @description 设置当前选中的路由及左侧按钮数据
     * @param value 菜单数据中的name字段
     */
    setSideMenu(value: string) {
      this.activeIndex = value
      this.menuList?.forEach((item) => {
        if (item.name === value && item.menuList && item.menuList.length > 0) {
          this.sideMenu = item.menuList
        }
      })
    },

    /**
     * @description 获取路由及导航数据
     */
    async getMenuList() {
      try {
        const data = (await httpGet('./mock/menu.json')) as Array<MenuItem>
        this.menuList = [...data]
      } catch (error) {
        console.log('error', error)
      }
    }
  }
})