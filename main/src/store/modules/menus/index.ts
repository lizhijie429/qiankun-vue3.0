/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:07
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-19 10:06:46
 * @Description:
 */
// import { RootState } from "@/store";
import { Store as VuexStore, CommitOptions, DispatchOptions, Module } from "vuex";
import { MenusState } from "./state";
import { state } from "./state";
import { mutations, Mutations } from "./mutations";
import { actions, Actions } from "./actions";
import { InterMenus } from "./interface";

export { MenusState };

export type MenusStore<S = MenusState> = Omit<VuexStore<S>, "getters" | "commit" | "dispatch"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export const store = {
  namespaced: true,
  state,
  mutations,
  actions,
};
