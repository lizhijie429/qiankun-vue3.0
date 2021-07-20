/*
 * @Author: lizhijie429
 * @Date: 2021-07-19 11:01:53
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-20 13:51:56
 * @Description:
 */
import { InterMenus } from "./modules/menus/interface";
export const getters = {
  getSubMenus(state: any) {
    const currentApp = state.currentApp;
    console.log("currentApp,==============", currentApp);
    console.log("state.menus--------------", state.menus);
    if (currentApp === "home") {
      return [];
    } else {
      state.menus.forEach((item: InterMenus) => {
        if (item.moduleName === currentApp) {
          return item.menuList;
        } else {
          return [];
        }
      });
    }
  },
};
