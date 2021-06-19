import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Layout from "@/layout/index.vue";
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
      // {
      //   path: "/about",
      //   name: "About",
      //   component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
