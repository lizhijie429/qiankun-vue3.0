import { createApp, type App } from "vue";
import app from "./App.vue";

import { createPinia } from "pinia";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import {
  renderWithQiankun,
  qiankunWindow,
  type QiankunProps,
} from "vite-plugin-qiankun/dist/helper";

let root: App;

function render(props: QiankunProps) {
  const { container } = props;
  root = createApp(app);
  root.use(createPinia());
  root.use(router);
  root.use(ElementPlus, { size: "small" });
  const c = container
    ? container.querySelector("#app")
    : document.getElementById("app");
  root.mount(c);
}

console.log(3333);

renderWithQiankun({
  mount(props) {
    console.log("vue3sub mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props) {
    console.log("vue3sub unmount=", props);
    root.unmount();
  },
  update(props) {
    console.log("vue3sub update");
    console.log(props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
