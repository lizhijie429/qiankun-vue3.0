/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:15
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-22 15:30:20
 * @Description:
 */
export interface UserInfoState {
  userInfo: { name: string; age: number };
  globalConfig: { size: string; zIndex: number };
}

export const state = (): UserInfoState => {
  return {
    userInfo: { name: "qiankun", age: 29 },
    globalConfig: { size: "small", zIndex: 3000 },
  };
};
