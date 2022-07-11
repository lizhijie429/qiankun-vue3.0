import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import LayoutView from '@/views/LayoutView.vue'
import { useMenuRouterStore } from '../stores/menu-router'
const modules = import.meta.glob('@/views/**/*.vue')

// 静态路由
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { isTabs: false, isSide: false, moduleName: 'main', title: '登录' }
  },
  {
    path: '/',
    name: 'layout',
    component: LayoutView,
    redirect: '/home', // 默认加载的路由
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: {
          isTabs: false,
          isSide: false,
          moduleName: 'main',
          title: '首页'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  const menuRouterStore = useMenuRouterStore()
  // 菜单当前选中及页面持久
  if (to.path === '/login') {
    menuRouterStore.setCurrentModule('login')
    menuRouterStore.setCurrentPage('/login')
  }
  // 首页的时候组装左侧导航数据
  if (to.path === '/home') {
    menuRouterStore.setCurrentModule('home')
    menuRouterStore.setCurrentPage('/home')
  }
  if (menuRouterStore.menuList === null) {
    const routerList = await menuRouterStore.getMenuList()
    routerList.forEach((item) => {
      const route = JSON.parse(JSON.stringify(item))
      if (item.meta?.moduleName === 'main') {
        router.addRoute('layout', {
          ...route,
          component: modules[`../views/${item.meta.component}.vue`]
        })
      } else {
        router.addRoute({
          ...route,
          component: modules['../views/LayoutView.vue']
        })
      }
    })
    next({ ...to, replace: true })
  } else {
    next()
  }
})

export default router
