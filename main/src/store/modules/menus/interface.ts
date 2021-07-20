/*
 * @Author: lizhijie429
 * @Date: 2021-06-21 15:19:37
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-20 15:22:45
 * @Description:
 */
// import type { RouteRecordRaw, RouteMeta } from "vue-router";
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

// export type Component<T extends any = any> =
//   | ReturnType<typeof defineComponent>
//   | (() => Promise<typeof import("*.vue")>)
//   | (() => Promise<T>);

// export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
//   name: string;
//   meta: RouteMeta;
//   component?: Component | string;
//   components?: Component;
//   children?: AppRouteRecordRaw[];
//   props?: Recordable;
//   fullPath?: string;
// }
