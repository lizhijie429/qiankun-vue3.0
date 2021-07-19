import { createStore } from "vuex";
// import { getters } from "./getters";
import { store as menus, MenusState, MenusStore } from "./modules/menus";
import { InterMenus } from "./modules/menus/interface";

export interface RootState {
  menus: MenusState;
}

// export type Store = MenusStore<Pick<RootState, "menus">>;

export const store = createStore({
  strict: true,
  modules: {
    menus,
  },
});

// 定义自己的 `useStore` 组合式函数
// export function useStore(): Store {
//   return store as Store;
// }
