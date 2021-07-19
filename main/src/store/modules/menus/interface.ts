/*
 * @Author: lizhijie429
 * @Date: 2021-06-21 15:19:37
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-18 20:51:52
 * @Description:
 */
import { DefineComponent } from "vue";

export interface Meta {
  isTabs?: boolean;
  isSide?: boolean;
  isMain?: boolean;
}

export interface InterRoutes {
  path: string;
  name: string;
  component?: DefineComponent<any, any, any>;
  meta: Meta;
  title: string;
  moduleName: string;
}

export interface InterMenus {
  moduleTitle: string;
  moduleName: string;
  icon: string;
  menuList: InterRoutes[];
}
