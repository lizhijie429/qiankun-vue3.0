import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import LayoutView from '@/views/LayoutView.vue'
// import NotFound from "@/views/NotFound.vue";
// import
import { useMenuRouterStore } from '../stores/menu-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
})

router.beforeEach(async (to, from, next) => {
  // 菜单当前选中及页面持久
  if (to.path !== '/login') {
    // store.commit("permission/UPDATE_CURRENT_MODULE_NAME", to.meta.moduleName);
    // store.commit("permission/UPDATE_CURRENT_PAGE", to.path);
  }
  // 首页的时候组装左侧导航数据
  if (to.path === '/home') {
    // store.commit("permission/UPDATE_SUB_MENU", true);
  }
  const menuRouter = useMenuRouterStore()
  if (menuRouter.menuList === null) {
    await menuRouter.getMenuList()
  }

  next()
})

export default router
