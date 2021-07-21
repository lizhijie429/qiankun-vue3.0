/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:07
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-21 09:40:44
 * @Description:
 */
import { state } from "./state";
import { mutations, Mutations } from "./mutations";

export { UserInfoState } from "./state";

export const store = {
  namespaced: true,
  state,
  mutations,
};
