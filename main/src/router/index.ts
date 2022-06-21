import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import LayoutView from "@/views/LayoutView.vue";
// import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { isTabs: false, isSide: false, moduleName: "main", title: "登录" },
    },
    {
      path: "/",
      name: "layout",
      component: LayoutView,
      redirect: "/home", // 默认加载的路由
      children: [
        {
          path: "/home",
          name: "home",
          component: HomeView,
          meta: {
            isTabs: false,
            isSide: false,
            moduleName: "main",
            title: "首页",
          },
        },
      ],
    },
  ],
});

export default router;
