/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:07
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-22 16:16:30
 * @Description:
 */
import { RootState } from "@/store";
import { Store as VuexStore, CommitOptions, DispatchOptions, Module } from "vuex";
import { PermissionState } from "./state";
import { state } from "./state";
import { mutations, Mutations } from "./mutations";
import { actions, Actions } from "./actions";

export { PermissionState };

export type PermissionStore<S = PermissionState> = Omit<VuexStore<S>, "getters" | "commit" | "dispatch"> & {
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
  // TODO: With namespaced option turned on, having problem how to use dispatch with action types...
  // But without it, a bigger store might have clashes in namings
  // namespaced: true,
};
