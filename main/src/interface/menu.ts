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
