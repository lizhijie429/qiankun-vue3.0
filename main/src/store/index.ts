import { createStore } from "vuex";
import { store as menus, MenusState } from "./menus";
import { store as user, UserInfoState } from "./user";
import { store as tabs, TabsState } from "./tabs";

export interface RootState {
  menus: MenusState;
  user: UserInfoState;
  tabs: TabsState;
}

// 定义 injection key
// export type Store = MenusStore<Pick<RootState, "menus">>;

export const store = createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    menus,
    user,
    tabs,
  },
});

// 定义自己的 `useStore` 组合式函数
// export function useStore(): Store {
//   return store as Store;
// }
