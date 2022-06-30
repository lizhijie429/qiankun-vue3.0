import { defineStore } from 'pinia'
import { httpGet } from '@/utils/http'

interface MenuItem {
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

interface MenuRouterState {
  menuList: null | Array<MenuItem>
  routes: null | Array<unknown>
}

export const useMenuRouterStore = defineStore({
  id: 'menuRouter',
  state: () =>
    ({
      menuList: null,
      routes: null
    } as MenuRouterState),
  actions: {
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
