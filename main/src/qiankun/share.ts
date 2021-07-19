/*
 * @Author: lizhijie429
 * @Date: 2021-07-19 15:05:41
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-19 15:47:14
 * @Description:
 */

// import { useStore } from "vuex";
import { initGlobalState, MicroAppStateActions } from "qiankun";

// const store = useStore();

export const initialState = {
  // 当前登录用户
  userInfo: {
    name: "store.state.menus.menusList",
  },
  // 全局配置
  globalConfig: {},
  // 路由数据
  routers: [],
};

// 初始化state
export const actions: MicroAppStateActions = initGlobalState(initialState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
