/*
 * @Author: lizhijie429
 * @Date: 2021-06-19 16:39:53
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-21 16:44:45
 * @Description:
 */
import store from "..";
import Layout from "../../layout/index.vue";
import { getResources } from "../../utils/http";
import { Route } from "../interface/interface";
import { SET_MENUS_LIST } from "../types";
// 组装路由数据
function getMenuItem(menus: Route[]): Route[] {
  const menusItems = [];
  for (let index = 0; index < menus.length; index++) {
    const menu = menus[index];
    const route: Route = {
      path: menu.path,
      component: Layout,
      name: menu.name,
      meta: menu.meta,
      title: menu.title,
      moduleName: menu.moduleName,
    };
    menusItems.push(route);
  }
  return menusItems;
}

export interface PermissionState {
  menus: Route[];
  currentPage: string;
}

const permission = {
  namespaced: true,
  state: () => ({ menus: [], currentPage: "" }),
  mutations: {
    [SET_MENUS_LIST](state: PermissionState, payload: Route[]) {
      state.menus = payload;
    },
  },
  actions: {
    getMenus() {
      return new Promise((resolve) => {
        getResources("/menus").then((res) => {
          let menus: Route[] = [];
          const data = res.data.data.list;
          for (let i = 0; i < data.length; i++) {
            const module = data[i];
            const menusItems = getMenuItem(module.menuList);
            menus = menus.concat(menusItems);
          }
          resolve(menus);
          store.commit("permission/SET_MENUS_LIST", menus);
        });
      });
    },
  },
  getters: {},
};
export default permission;
