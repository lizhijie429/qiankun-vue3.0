import "./public-path";
import { createApp, toRaw } from "vue";
import App from "./App.vue";
import store from "./store";
import { createRouter, createWebHistory } from "vue-router";
import initGlobalState from "./common/index";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const temp: any = window;
const isQiankun = temp.__POWERED_BY_QIANKUN__;

let instance: ReturnType<typeof createApp> | null;
let router: ReturnType<typeof createRouter> | null;

function getRoutes(store: any) {
  return toRaw(store.state.routes.routesData);
}

function render(props: any) {
  const { container } = props as any;
  const routes = getRoutes(store);
  router = createRouter({
    history: createWebHistory(temp.__POWERED_BY_QIANKUN__ ? "/" : "/"),
    routes,
  });
  instance = createApp(App);
  instance.use(ElementPlus, { size: "small", zIndex: 3000 });
  instance.use(store);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: Record<string, any>) {
  console.log("[vue] vue app mount", props);
  initGlobalState(props, store);
  render(props);
}
export async function unmount() {
  instance = null;
  router = null;
}

isQiankun || render("");
