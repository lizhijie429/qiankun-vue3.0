import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const temp: any = window;
const isQiankun = temp.__POWERED_BY_QIANKUN__;

export async function bootstrap() {
  console.log("react app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
function render() {
  const app = createApp(App);
  app.use(Antd);
  app.use(store).use(router).mount("#app");
}

export async function mount(props: any) {
  console.log(props);
  render();
}
// createApp(App).use(store).use(router).mount('#child1')
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
  console.log(props);
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log("update props", props);
}

isQiankun || render();
