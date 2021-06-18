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
  start();
}
