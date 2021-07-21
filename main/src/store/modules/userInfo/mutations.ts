/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:41
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-21 09:38:55
 * @Description:
 */
import { MutationTree } from "vuex";
import { UPDATE_USER_INFO } from "../../types";
import { InterUserInfo } from "./interface";
import { UserInfoState } from "./state";

export type Mutations<S = UserInfoState> = {
  [UPDATE_USER_INFO](state: S, payload: InterUserInfo): void;
};

export const mutations: MutationTree<UserInfoState> & Mutations = {
  [UPDATE_USER_INFO](state: UserInfoState, payload: InterUserInfo) {
    state.userInfo = payload;
  },
};
