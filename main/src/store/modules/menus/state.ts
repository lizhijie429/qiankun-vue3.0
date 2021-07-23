/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:15
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 09:13:24
 * @Description:
 */
import { InterRoutes, InterMenus } from "../../../interface/MenusInterface";

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
