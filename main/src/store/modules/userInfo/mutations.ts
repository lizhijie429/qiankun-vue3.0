/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:41
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-22 15:32:26
 * @Description:
 */
import { MutationTree } from "vuex";
import { UPDATE_USER_INFO, UPDATE_GLOBAL_CONFIG } from "../../types";
import { InterUserInfo, InterGlobalConfig } from "./interface";
import { UserInfoState } from "./state";

export type Mutations<S = UserInfoState> = {
  [UPDATE_USER_INFO](state: S, payload: InterUserInfo): void;
};

export const mutations: MutationTree<UserInfoState> & Mutations = {
  [UPDATE_USER_INFO](state: UserInfoState, payload: InterUserInfo) {
    state.userInfo = payload;
  },
  [UPDATE_GLOBAL_CONFIG](state: UserInfoState, payload: InterGlobalConfig) {
    state.globalConfig = payload;
  },
};
