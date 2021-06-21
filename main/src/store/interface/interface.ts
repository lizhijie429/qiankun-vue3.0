/*
 * @Author: lizhijie429
 * @Date: 2021-06-21 15:19:37
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-21 17:25:41
 * @Description:
 */
import { DefineComponent } from "vue";
export interface Meta {
  isTabs?: Boolean;
  isSide?: Boolean;
}

export interface Route {
  path: string;
  name: string;
  component?: DefineComponent<{}, {}, any>;
  meta: Meta;
  title: string;
  moduleName: string;
}
