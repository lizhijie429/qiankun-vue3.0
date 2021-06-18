import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const temp: any = window;
const isQiankun = temp.__POWERED_BY_QIANKUN__;

let instance = null;

function render() {
  instance = createApp(App);
  instance.use(store).use(router);
  instance.mount("#sub01");
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount() {
  render();
}
export async function unmount() {
  instance = null;
}

isQiankun || render();
