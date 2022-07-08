import type { RouteRecordRaw } from 'vue-router'
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
  routes: Array<RouteRecordRaw>
  currentModule: string
  sideMenu: null | Array<MenuItem>
  currentPage: string
}

export interface MetaData {
  moduleName: string
}

export interface TabsData {
  tabsList: null | Array<MenuItem>
}
