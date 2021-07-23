/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:41
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 14:54:39
 * @Description:
 */
import { MutationTree } from "vuex";
import { UserMutationsType } from "./types";
import { InterUserInfo, InterGlobalConfig } from "@/interface/UserInterface";
import { UserInfoState } from "./state";

export type Mutations<S = UserInfoState> = {
  [UserMutationsType.UPDATE_USER_INFO](state: S, payload: InterUserInfo): void;
};

export const mutations: MutationTree<UserInfoState> & Mutations = {
  [UserMutationsType.UPDATE_USER_INFO](state: UserInfoState, payload: InterUserInfo) {
    state.userInfo = payload;
  },
  [UserMutationsType.UPDATE_GLOBAL_CONFIG](state: UserInfoState, payload: InterGlobalConfig) {
    state.globalConfig = payload;
  },
};
