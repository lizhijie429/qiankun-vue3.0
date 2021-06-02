import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./qiankun/index";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(Antd);
app.use(store).use(router).mount("#app");
