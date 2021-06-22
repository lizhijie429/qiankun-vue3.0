import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import View from "../components/view/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/sub02",
    name: "View",
    component: View,
    redirect: "/sub02/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
    ],
  },
];

export default routes;
