import { createStore } from "vuex";
// import { getters } from "./getters";
import { store as permission, PermissionStore } from "./modules/permission";

export interface State {
  count: number;
}

export interface RootState {
  permission: PermissionState;
}

// export type Store = PermissionStore<Pick<RootState, "permission">>;

export const store = createStore({
  // getters,
  modules: {
    permission,
  },
});

// 定义自己的 `useStore` 组合式函数
// export function useStore(): Store {
//   return store as Store;
// }
