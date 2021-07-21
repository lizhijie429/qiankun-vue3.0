import { createApp, toRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "./assets/style/index.scss";
import "./assets/iconfont/iconfont.css";
import { registerMicroApps, start, initGlobalState, MicroAppStateActions, OnGlobalStateChangeCallback } from "qiankun";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);
app.use(store).use(router);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.mount("#app");

// 定义全局下发的数据
const initialState = {
  // 当前登录用户
  userInfo: toRaw(store.state.user.userInfo),
  // 全局配置
  globalConfig: "全局配置",
  // 路由数据
  routers: "路由数据",
};
// 初始化全局下发的数据
export const actions: MicroAppStateActions = initGlobalState(initialState);

// 检测全局下发数据的改变
actions.onGlobalStateChange((state: Record<string, any>, prev: Record<string, any>) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
  // 修改全局下发的数据
  for (const key in state) {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      const element = state[key];
      initialState[key] = element;
    }
  }
});

// 子应用注册
export const registerApps = () => {
  registerMicroApps([
    {
      name: "sub01", // 应用名称
      entry: "//localhost:8010/sub01",
      container: "#subapp-viewport",
      activeRule: "/sub01",
      props: {
        routerBase: "/sub01", // 下发基础路由
        globalState: initialState, // 下发全局数据方法
      },
    },
    {
      name: "sub02",
      entry: "//localhost:8020/sub02",
      container: "#subapp-viewport",
      activeRule: "/sub02",
      props: {
        routerBase: "/sub02",
        globalState: initialState,
      },
    },
  ]);
  start({
    prefetch: "all", // 可选，是否开启预加载，默认为 true。
    sandbox: true, // 可选，是否开启沙箱，默认为 true。// 从而确保微应用的样式不会对全局造成影响。
    singular: true, // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
  });
};
