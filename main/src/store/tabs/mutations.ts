/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:41
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 16:32:57
 * @Description:
 */

import { InterRoutes } from "@/interface/MenusInterface";
import { TabsState } from "./state";
import { TabsMutationsType } from "./types";

// // 删除路由的操作
// function removeRouter(state, tabsItem) {
//   state.tabsList.forEach((item, index) => {
//     if (item.treeId === tabsItem.treeId) {
//       state.tabsList.splice(index, 1);
//     }
//   });
// }
// // 跳转路由的函数
// function jumpRouter(state, payload) {
//   const { tabsItem, moduleName } = payload;
//   // 路由跳转
//   state.tabsHover = tabsItem.treeId;
//   router.push({
//     path: tabsItem.routePath,
//     query: {
//       module: moduleName,
//     },
//   });
// }

export type Mutations<S = TabsState> = {
  [TabsMutationsType.UPDATE_TABS_HOVER](state: S, payload: InterRoutes[]): void;
  [TabsMutationsType.REMOVE_LAST_TAB](state: S, payload: string): void;
  [TabsMutationsType.REMOVE_ANY_TAB](state: S, payload: string): void;
};

export const mutations: Mutations = {
  // 跳转路由
  [TabsMutationsType.UPDATE_TABS_HOVER](state, payload) {
    console.log("state, payload", state, payload);
  },
  // 删除最后一个tabs标签
  [TabsMutationsType.REMOVE_LAST_TAB](state, payload) {
    console.log("state, payload", state, payload);
  },
  // 删除除了第一个跟最后一个以外得任何一个tab标签
  [TabsMutationsType.REMOVE_ANY_TAB](state, payload) {
    console.log("state, payload", state, payload);
  },
};
