/*
 * @Author: lizhijie429
 * @Date: 2021-07-21 15:41:11
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-21 16:04:31
 * @Description:
 */
import { Store } from "vuex";

const registerGlobalModule = (props: Record<string, any>, store: Store<{}>) => {
  const initState = {
    userInfo: {},
    globalConfig: "全局配置",
    routers: "路由数据",
  };
  if (!store.hasModule("global")) {
    const globalModule = {
      namespaced: true,
      state: initState,
      actions: {
        setGlobalState({ commit }: any, payload: any) {
          commit("setGlobalState", payload);
          commit("emitGlobalState", payload);
        },
        initGlobalState({ commit }: any, payload: any) {
          commit("setGlobalState", payload);
        },
      },
      mutations: {
        setGlobalState(state: any, payload: any) {
          state = Object.assign(state, payload);
        },
        emitGlobalState(state: any) {
          props.setGlobalState(state);
        },
      },
    };
    store.registerModule("global", globalModule);
  } else {
    store.commit("global/initGlobalState", initState);
  }
};

const initGlobalState = (props: Record<string, any>, store: Store<{}>) => {
  registerGlobalModule(props, store);
  props.onGlobalStateChange((state: Record<string, any>, prev: Record<string, any>) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("子应用", state, prev);
    store.commit("global/setGlobalState", state);
  });
};

export default initGlobalState;
