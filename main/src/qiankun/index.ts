import { registerMicroApps, start } from "qiankun";

export function registerApps() {
  registerMicroApps([
    {
      name: "sub01", // app name registered
      entry: "//localhost:8010",
      container: "#subView",
      activeRule: "/sub01",
    },
    {
      name: "sub02",
      entry: "//localhost:8020",
      container: "#subView",
      activeRule: "/sub02",
    },
  ]);
  start({
    // 可选，是否开启预加载，默认为 true。
    prefetch: "all",
    // 可选，是否开启沙箱，默认为 true。// 从而确保微应用的样式不会对全局造成影响。
    sandbox: { strictStyleIsolation: true },
    // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
    singular: true,
  });
}
