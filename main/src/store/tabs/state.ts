/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:15
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 14:53:18
 * @Description:
 */

import { InterRoutes } from "@/interface/MenusInterface";

export interface TabsState {
  tabsList: InterRoutes;
  tabsHover: string;
}

export const state = () => {
  return {
    tabsList: [],
    tabsHover: [],
  };
};
