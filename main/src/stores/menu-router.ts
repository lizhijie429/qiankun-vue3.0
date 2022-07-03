import { defineStore } from 'pinia'
import { httpGet } from '@/utils/http'
import type { MenuRouterState, MenuItem } from '@/interface/menu'
import { setStorage } from '@/utils/storage'
export const useMenuRouterStore = defineStore({
  id: 'menuRouter',
  state: () =>
    ({
      menuList: null,
      routes: null,
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
      setStorage('currentModule', value)
      this.currentModule = value
    },
    /**
     * @description 设置当前左侧导航选中的菜单
     * @param value 菜单数据中的path字段
     */
    setCurrentPage(value: string) {
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
