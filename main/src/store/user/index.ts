/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:07
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 09:27:13
 * @Description:
 */
import { state } from "./state";
import { mutations } from "./mutations";

import type { UserInfoState } from "./state";
export { UserInfoState };

export const store = {
  namespaced: true,
  state,
  mutations,
};
