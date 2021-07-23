/*
 * @Author: lizhijie429
 * @Date: 2021-06-21 15:19:37
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-23 09:04:09
 * @Description:
 */
import { defineComponent } from "vue";

export interface Meta {
  isTabs?: boolean;
  isSide?: boolean;
  isMain?: boolean;
  moduleName: string;
}

export interface InterRoutes {
  moduleName: string;
  path: string;
  name: string;
  component?: ReturnType<typeof defineComponent>;
  title: string;
  meta: {
    isTabs: boolean;
    isSide: boolean;
    isMain: boolean;
    moduleName: string;
  };
}

export interface InterMenus {
  moduleTitle: string;
  moduleName: string;
  icon: string;
  menuList: InterRoutes[];
}
