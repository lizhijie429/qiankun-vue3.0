import { registerMicroApps, start } from "qiankun";

import { initialState } from "./share";

import "./share";

export function registerApps() {
  registerMicroApps([
    {
      name: "sub01", // app name registered
      entry: "//localhost:8010/sub01",
      container: "#subapp-viewport",
      activeRule: "/sub01",
      props: {
        routerBase: "/sub01", // 下发基础路由
        getGlobalState: initialState, // 下发全局数据方法
      },
    },
    {
      name: "sub02",
      entry: "//localhost:8020/sub02",
      container: "#subapp-viewport",
      activeRule: "/sub02",
      props: {
        routerBase: "/sub02", // 下发基础路由
        globalState: initialState, // 下发全局数据方法
      },
    },
  ]);
  start({
    // 可选，是否开启预加载，默认为 true。
    prefetch: "all",
    // 可选，是否开启沙箱，默认为 true。// 从而确保微应用的样式不会对全局造成影响。
    sandbox: true,
    // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
    singular: true,
  });
}
