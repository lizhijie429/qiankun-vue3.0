/*
 * @Author: lizhijie429
 * @Date: 2021-06-21 15:19:37
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-22 13:57:18
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
  component?: DefineComponent<{}, {}, any>;
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
