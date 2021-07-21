/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:15
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-21 09:59:49
 * @Description:
 */
export interface UserInfoState {
  userInfo: { name: string; age: number };
}

export const state = (): UserInfoState => {
  return {
    userInfo: { name: "qiankun", age: 29 },
  };
};
