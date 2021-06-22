/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:41
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-22 15:39:45
 * @Description:
 */
import { MutationTree } from "vuex";
import { InterRoutes, InterMenus } from "./interface";
import { SET_ROUTERS_LIST, SET_MENUS_LIST, SET_CURRENT_APP, SET_CURRENT_PAGE } from "../../types";
import { PermissionState } from "./state";

export type Mutations<S = PermissionState> = {
  [SET_MENUS_LIST](state: S, payload: InterMenus[]): void;
  [SET_ROUTERS_LIST](state: S, payload: InterRoutes[]): void;
  [SET_CURRENT_APP](state: S, payload: string): void;
  [SET_CURRENT_PAGE](state: S, payload: string): void;
};

export const mutations: MutationTree<PermissionState> & Mutations = {
  [SET_MENUS_LIST](state: PermissionState, payload: InterMenus[]) {
    state.menus = payload;
  },
  [SET_ROUTERS_LIST](state: PermissionState, payload: InterRoutes[]) {
    state.routers = payload;
  },
  [SET_CURRENT_APP](state: PermissionState, payload: string) {
    sessionStorage.setItem("currentApp", payload);
    state.currentApp = payload;
  },
  [SET_CURRENT_PAGE](state: PermissionState, payload: string) {
    sessionStorage.setItem("currentPage", payload);
    state.currentPage = payload;
  },
};