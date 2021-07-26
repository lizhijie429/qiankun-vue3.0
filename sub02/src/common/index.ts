/*
 * @Author: lizhijie429
 * @Date: 2021-07-21 15:41:11
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-26 14:55:39
 * @Description:
 */
import { Store } from "vuex";
const registerGlobalModule = (props: Record<string, any>, store: Store<{}>): void => {
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
  }
};

//  为vuex添加routes模块,存储及修改动态路由数据
const registerRoutesModule = (store: Store<{}>): void => {
  if (!store.hasModule("routes")) {
    const routesModule = {
      namespaced: true,
      state: {
        routesData: [],
      },
      mutations: {
        UPDATE_ROUTER_DATA(state: any, payload: any) {
          state.routesData = payload;
        },
      },
    };
    store.registerModule("routes", routesModule);
  }
};

const initGlobalState = (props: Record<string, any>, store: Store<{}>): void => {
  // 动态注册vuex模块，存储全局数据
  registerGlobalModule(props, store);
  registerRoutesModule(store);
  // 监控下发数据的变化
  props.onGlobalStateChange((state: Record<string, any>, prev: Record<string, any>) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("state：", state, "prev：", prev);
    store.commit("global/setGlobalState", state);
  });
  // 过滤路由数据
  const routesData = props.globalState.routers;
  if (props.name) {
    const routers = [];
    for (const item of routesData) {
      if (item.moduleName === props.name) {
        item.component = () => import(/* webpackChunkName: "sub01" */ "@/views" + item.path + "/index.vue");
        routers.push(item);
      }
    }
    store.commit("routes/UPDATE_ROUTER_DATA", routers);
  }
};

export default initGlobalState;
