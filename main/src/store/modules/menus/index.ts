/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:07
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-21 09:03:22
 * @Description:
 */
// import { RootState } from "@/store";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";
import { state, MenusState } from "./state";
import { mutations, Mutations } from "./mutations";
import { actions, Actions } from "./actions";

export { MenusState } from "./state";

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
