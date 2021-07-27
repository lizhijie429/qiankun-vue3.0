/*
 * @Author: lizhijie429
 * @Date: 2021-06-22 15:24:41
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-27 15:51:45
 * @Description:
 */

import { InterRoutes } from "@/interface/MenusInterface";
import { TabsState } from "./state";
import { TabsMutationsType } from "./types";
import { ElMessage } from "element-plus";
import { Router } from "vue-router";

// // 删除路由的操作
function removeRouter(state: TabsState, payload: UpdateTabsListPayout): void {
  const { tabsItem, router } = payload;
  state.tabsList.forEach((item, index) => {
    if (item.path === tabsItem.path) {
      state.tabsList.splice(index, 1);
    }
  });
}

// 跳转路由的函数
function jumpRouter(state: TabsState, payload: UpdateTabsListPayout): void {
  const { tabsItem, router } = payload;
  // 路由跳转
  state.tabsHover = tabsItem.path;
  sessionStorage.setItem("currentApp", tabsItem.moduleName);
  sessionStorage.setItem("currentPage", tabsItem.path);
  router.push({
    path: tabsItem.path,
    query: {
      module: tabsItem.moduleName,
    },
  });
}

interface UpdateTabsListPayout {
  tabsItem: InterRoutes;
  router: Router;
  indexOf?: number;
}

export type Mutations<S = TabsState> = {
  [TabsMutationsType.UPDATE_TABS_LIST](state: S, payload: UpdateTabsListPayout): void;
  [TabsMutationsType.UPDATE_TABS_HOVER](state: S, payload: UpdateTabsListPayout): void;
  [TabsMutationsType.REMOVE_LAST_TAB](state: S, payload: UpdateTabsListPayout): void;
  [TabsMutationsType.REMOVE_ANY_TAB](state: S, payload: UpdateTabsListPayout): void;
};

export const mutations: Mutations = {
  // 新增tabs
  [TabsMutationsType.UPDATE_TABS_LIST](state, payload) {
    const { tabsItem } = payload;
    const hasTabsItem = state.tabsList.filter((item) => {
      return item.path === tabsItem.path;
    });
    if (state.tabsList.length < 9) {
      !hasTabsItem.length && state.tabsList.push(tabsItem);
      jumpRouter(state, payload);
    } else {
      !hasTabsItem.length
        ? ElMessage({
            message: "最多允许打开9个标签，请删除其余标签后再进行添加。",
            type: "warning",
          })
        : jumpRouter(state, payload);
    }
  },
  // 跳转路由
  [TabsMutationsType.UPDATE_TABS_HOVER](state, payload) {
    jumpRouter(state, payload);
  },
  // 删除最后一个tabs标签
  [TabsMutationsType.REMOVE_LAST_TAB](state, payload) {
    const { tabsItem } = payload;
    if (state.tabsList.length > 1) {
      if (tabsItem.path !== state.tabsHover) {
        // 第一步：执行删除操作
        removeRouter(state, payload);
      } else {
        removeRouter(state, payload);
        const index = state.tabsList.length - 1;
        const lastTabsItem = state.tabsList[index];
        jumpRouter(state, { tabsItem: lastTabsItem, router: payload.router });
      }
    }
  },
  // 删除除了第一个跟最后一个以外得任何一个tab标签
  [TabsMutationsType.REMOVE_ANY_TAB](state, payload) {
    const { tabsItem, indexOf } = payload;
    const tabsListLength = state.tabsList.length;
    if (indexOf && state.tabsList.length > 1 && indexOf < tabsListLength) {
      if (tabsItem.path !== state.tabsHover) {
        // 第一步：执行删除操作
        removeRouter(state, payload);
      } else {
        const nextTabsItem = state.tabsList[indexOf + 1];
        removeRouter(state, payload);
        jumpRouter(state, { tabsItem: nextTabsItem, router: payload.router });
      }
    }
  },
};
