import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router";
import { store } from "../store/index";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Layout from "@/layout/index.vue";
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
    name: "Layout",
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

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path === "/home") {
    sessionStorage.removeItem("currentMenu");
    sessionStorage.removeItem("currentPage");
  }
  store.dispatch("menus/getMenus").then((res) => {
    res.forEach((item: RouteRecordRaw) => {
      router.addRoute(item);
    });
    next();
  });
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
