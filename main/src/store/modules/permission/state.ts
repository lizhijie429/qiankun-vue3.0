/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:15
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-22 16:11:10
 * @Description:
 */
import { InterRoutes, InterMenus } from "./interface";

export interface PermissionState {
  menus: InterMenus[];
  routers: InterRoutes[];
  currentApp: string;
  currentPage: string;
}

export const state = (): PermissionState => {
  return {
    menus: [],
    routers: [],
    currentApp: "home",
    currentPage: "",
  };
};
