/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:52
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-24 23:30:47
 * @Description:
 */
import { ActionContext, ActionTree } from "vuex";
import { RootState } from "..";
import { Mutations } from "../menus/mutations";
import { TabsState } from "./state";
import { TabsActionsType } from "./types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<TabsState, RootState>, "commit">;

export interface Actions {
  [TabsActionsType.UPDATE_TABS_LIST]({ commit, rootState }: AugmentedActionContext, payload: string): void;
}

export const actions: ActionTree<TabsState, RootState> & Actions = {
  // 新增tabs
  [TabsActionsType.UPDATE_TABS_LIST]({ commit, rootState }: AugmentedActionContext, payload: string) {
    // commit(SettingsMutationTypes.CHANGE_SETTING, payload);
    console.log("commit", commit);
    console.log("rootState", rootState);
    console.log("payload", payload);
  },
};
