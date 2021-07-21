import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";

import { createRouter, createWebHistory } from "vue-router";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const temp: any = window;
const isQiankun = temp.__POWERED_BY_QIANKUN__;

let instance: ReturnType<typeof createApp> | null;
let router: ReturnType<typeof createRouter> | null;

function render(props = {}) {
  const { container } = props as any;
  instance = createApp(App);
  const router = createRouter({
    history: createWebHistory(temp.__POWERED_BY_QIANKUN__ ? "/" : "/"),
    routes,
  });
  instance.use(ElementPlus, { size: "small", zIndex: 3000 });
  instance.use(store);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: Record<string, any>) {
  console.log("[vue] vue app mount", props);
  props.onGlobalStateChange((state: Record<string, any>, prev: Record<string, any>) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("子应用", state, prev);
  });
  render(props);
}
export async function unmount() {
  instance = null;
}

isQiankun || render();
