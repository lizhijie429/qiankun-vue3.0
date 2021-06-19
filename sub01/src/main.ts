import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const temp: any = window;
const isQiankun = temp.__POWERED_BY_QIANKUN__;

let instance: ReturnType<typeof createApp> | null;

function render(props = {}) {
  const { container } = props as any;
  instance = createApp(App);
  instance.use(store).use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: Record<string, any>) {
  render(props);
}
export async function unmount() {
  instance = null;
}
