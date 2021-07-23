/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:15
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 16:32:21
 * @Description:
 */

import { InterRoutes } from "@/interface/MenusInterface";

export interface TabsState {
  tabsList: InterRoutes[];
  tabsHover: string;
}

export const state = (): TabsState => {
  return {
    tabsList: [],
    tabsHover: "",
  };
};
