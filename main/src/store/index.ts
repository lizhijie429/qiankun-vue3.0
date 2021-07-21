import { createStore } from "vuex";
import { store as menus, MenusState, MenusStore } from "./modules/menus";
import { store as user, UserInfoState } from "./modules/userInfo";

export interface RootState {
  menus: MenusState;
  user: UserInfoState;
}

// 定义 injection key
// export type Store = MenusStore<Pick<RootState, "menus">>;

export const store = createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    menus,
    user,
  },
});

// 定义自己的 `useStore` 组合式函数
// export function useStore(): Store {
//   return store as Store;
// }
