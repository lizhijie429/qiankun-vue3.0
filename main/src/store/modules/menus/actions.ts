/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:52
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-21 16:17:28
 * @Description:
 */
import { RootState } from "../../index";
import Layout from "../../../layout/index.vue";
import { InterRoutes } from "./interface";
import { getResources } from "../../../utils/http";
import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "./mutations";
import { MenusState } from "./state";
import { qiankunActions } from "../../../main";
function getMenuItem(menus: InterRoutes[]): InterRoutes[] {
  const menusItems = [];
  for (let index = 0; index < menus.length; index++) {
    const menu = menus[index];
    const route: InterRoutes = {
      path: menu.path,
      component: Layout,
      name: menu.name,
      title: menu.title,
      meta: { ...menu.meta, moduleName: menu.moduleName },
      moduleName: menu.moduleName,
    };
    menusItems.push(route);
  }
  return menusItems;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<MenusState, RootState>, "commit">;

export interface Actions {
  getMenus({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<MenusState, RootState> & Actions = {
  getMenus({ commit }) {
    return new Promise((resolve) => {
      getResources("/menus").then((res) => {
        let menus: InterRoutes[] = [];
        const data = res.data.data.list;
        for (let i = 0; i < data.length; i++) {
          const module = data[i];
          const menusItems = getMenuItem(module.menuList);
          menus = menus.concat(menusItems);
        }
        commit("SET_MENUS_LIST", data);
        commit("SET_ROUTERS_LIST", menus);
        qiankunActions.setGlobalState({ routers: menus });
        resolve(menus);
      });
    });
  },
};
