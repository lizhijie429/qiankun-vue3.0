import { InjectionKey } from "vue";
import { createStore } from "vuex";
import permission from "./modules/permission";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    permission,
  },
});

// 定义自己的 `useStore` 组合式函数
// export function useStore() {
//   return baseUseStore(key);
// }
