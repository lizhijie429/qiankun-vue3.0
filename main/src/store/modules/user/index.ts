/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:07
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 09:15:15
 * @Description:
 */
import { state } from "./state";
import { mutations } from "./mutations";

export { UserInfoState } from "./state";

export const store = {
  namespaced: true,
  state,
  mutations,
};
