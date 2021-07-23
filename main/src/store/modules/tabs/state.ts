/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:15
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-22 19:38:22
 * @Description:
 */

export interface TabsState {
  tabsList: string;
  tabsHover: string;
}

export const state = () => {
  return {
    tabsList: [],
    tabsHover: [],
  };
};
