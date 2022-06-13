import { registerMicroApps, start } from "qiankun";
import { appList } from "./app-list";
import { LifecycleHooks } from "./lifecycle -hooks";
// 微应用注册
export const registerApps = () => {
  registerMicroApps(appList, LifecycleHooks);
  start({
    prefetch: false, // 取消预加载
  });
};
