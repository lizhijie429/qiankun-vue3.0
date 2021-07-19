/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:15
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-19 10:25:16
 * @Description:
 */
import { InterRoutes, InterMenus } from "./interface";

export interface MenusState {
  menusList: InterMenus[];
  routers: InterRoutes[];
  currentApp: string;
  currentPage: string;
}

export const state = (): MenusState => {
  return {
    menusList: [],
    routers: [],
    currentApp: "home",
    currentPage: "",
  };
};
