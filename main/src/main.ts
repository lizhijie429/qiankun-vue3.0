import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "./assets/style/index.scss";
import "./assets/iconfont/iconfont.css";
import "./qiankun/index";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);
app.use(store).use(router);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.mount("#app");
