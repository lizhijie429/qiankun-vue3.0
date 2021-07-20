/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:07
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-20 17:10:54
 * @Description:
 */
import { state, UserInfoState } from "./state";

export { UserInfoState };

export const store = {
  namespaced: true,
  state,
};
