import { defineStore } from "pinia";
import { httpGet } from "@/utils/http";

interface MenuRouterState {
  menuList: null | Array<unknown>;
  routes: null | Array<unknown>;
}

export const useMenuRouterStore = defineStore({
  id: "menuRouter",
  state: () =>
    ({
      menuList: null,
      routes: null,
    } as MenuRouterState),
  actions: {
    async getMenuList() {
      try {
        const data = (await httpGet("./mock/menu.json")) as Array<unknown>;
        this.menuList = [...data];
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
