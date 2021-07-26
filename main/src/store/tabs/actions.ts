/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:52
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-26 15:47:02
 * @Description:
 */
import { Router } from "vue-router";
import { ActionContext, ActionTree } from "vuex";
import { RootState } from "..";
import { Mutations } from "./mutations";
import { TabsState } from "./state";
import { TabsActionsType, TabsMutationsType } from "./types";

interface UpdateTabsListPayout {
  router: Router;
  key: string;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<TabsState, RootState>, "commit">;

export interface Actions {
  [TabsActionsType.UPDATE_TABS_LIST](
    { commit, rootState }: AugmentedActionContext,
    payload: UpdateTabsListPayout
  ): void;
  [TabsActionsType.UPDATE_TABS_HOVER](
    { commit, rootState }: AugmentedActionContext,
    payload: UpdateTabsListPayout
  ): void;
  [TabsActionsType.REMOVE_TABS_ITEM](
    { commit, rootState }: AugmentedActionContext,
    payload: UpdateTabsListPayout
  ): void;
}

export const actions: ActionTree<TabsState, RootState> & Actions = {
  // 新增tabs
  [TabsActionsType.UPDATE_TABS_LIST]({ commit, rootState }: AugmentedActionContext, payload: UpdateTabsListPayout) {
    const { router, key } = payload;
    const routers = rootState.menus.routers;
    for (const item of routers) {
      if (item.path === key) {
        commit(TabsMutationsType.UPDATE_TABS_LIST, { tabsItem: item, router });
      }
    }
  },
  // 跳转
  [TabsActionsType.UPDATE_TABS_HOVER]({ commit, rootState }: AugmentedActionContext, payload: UpdateTabsListPayout) {
    const { router, key } = payload;
    const routers = rootState.menus.routers;
    for (const item of routers) {
      if (item.path === key) {
        commit(TabsMutationsType.UPDATE_TABS_LIST, { tabsItem: item, router });
      }
    }
  },
  // 删除
  [TabsActionsType.REMOVE_TABS_ITEM]({ commit, rootState }: AugmentedActionContext, payload: UpdateTabsListPayout) {
    const { router, key } = payload;
    const tabsList = rootState.tabs.tabsList;
    for (const item of tabsList) {
      if (item.path === key) {
        console.log("item", key, item);
      }
    }
  },
};
