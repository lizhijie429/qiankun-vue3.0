import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import permission from "./modules/permission";

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    permission,
  },
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
