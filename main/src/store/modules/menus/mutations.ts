/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:41
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 09:12:58
 * @Description:
 */
import { MutationTree } from "vuex";
import { InterRoutes, InterMenus } from "../../../interface/MenusInterface";
import { MenusMutationsType } from "./types";
import { MenusState } from "./state";

export type Mutations<S = MenusState> = {
  [MenusMutationsType.SET_MENUS_LIST](state: S, payload: InterMenus[]): void;
  [MenusMutationsType.SET_ROUTERS_LIST](state: S, payload: InterRoutes[]): void;
  [MenusMutationsType.SET_CURRENT_APP](state: S, payload: string): void;
  [MenusMutationsType.SET_CURRENT_PAGE](state: S, payload: string): void;
};

export const mutations: MutationTree<MenusState> & Mutations = {
  [MenusMutationsType.SET_MENUS_LIST](state: MenusState, payload: InterMenus[]) {
    state.menusList = payload;
  },
  [MenusMutationsType.SET_ROUTERS_LIST](state: MenusState, payload: InterRoutes[]) {
    state.routers = payload;
  },
  [MenusMutationsType.SET_CURRENT_APP](state: MenusState, payload: string) {
    sessionStorage.setItem("currentApp", payload);
    state.currentApp = payload;
  },
  [MenusMutationsType.SET_CURRENT_PAGE](state: MenusState, payload: string) {
    sessionStorage.setItem("currentPage", payload);
    state.currentPage = payload;
  },
};
