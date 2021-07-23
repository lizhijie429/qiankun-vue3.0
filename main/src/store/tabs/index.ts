/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:07
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 15:55:23
 * @Description:
 */
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

import type { TabsState } from "./state";
export { TabsState };

export const store = {
  namespaced: true,
  state,
  mutations,
  actions,
};
