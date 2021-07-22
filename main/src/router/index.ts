import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw, RouterOptions } from "vue-router";
import { store } from "../store/index";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Layout from "@/layout/index.vue";
import { ElMessage } from "element-plus";
import { InterRoutes } from "../store/modules/menus/interface";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { isMain: true },
  },
  {
    path: "/",
    name: "Main",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
        meta: { isMain: true },
      },
      {
        path: "/sub01/home",
        component: Layout,
      },
      {
        path: "/sub02/home",
        component: Layout,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
} as RouterOptions);

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  NProgress.start();
  if (to.path === "/login") {
    next({ path: "/login" });
    NProgress.done();
  } else {
    if (to.path === "/home") {
      sessionStorage.removeItem("currentMenu");
      sessionStorage.removeItem("currentPage");
    }
    try {
      if (to.path !== "/login" && store.state.menus.routers.length === 0) {
        const res = await store.dispatch("menus/getMenus");
        res.forEach((route: RouteRecordRaw) => {
          if (router.hasRoute("Main")) router.addRoute("Main", route);
        });
        next({ ...to, replace: true });
      } else {
        next();
      }
    } catch (err) {
      ElMessage.error("Has Error");
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
