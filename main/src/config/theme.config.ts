/*
 * @Author: lizhijie429
 * @Date: 2021-06-21 11:31:23
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-21 14:04:55
 * @Description:
 */
enum Layout {
  Horizontal,
  Vertical,
  Gallery,
  Comprehensive,
  Common,
}
enum ThemeName {
  Default,
  Ocean,
  Green,
  Glory,
  White,
}

export interface Theme {
  layout?: Layout;
  themeName?: ThemeName;
  // 是否固定头部
  fixedHeader?: boolean;
  // 是否显示多标签页
  showTabsBar?: boolean;
  // 是否显示刷新组件
  showRefresh?: boolean;
  // 是否显示搜索组件
  showSearch?: boolean;
  // 是否显示主题组件
  showTheme?: boolean;
  // 是否显示通知组件
  showNotice?: boolean;
  // 是否显示全屏组件
  showFullScreen?: boolean;
}

export const themeConfig: Theme = {
  layout: Layout.Horizontal,
  themeName: ThemeName.Default,
  // 是否固定头部
  fixedHeader: true,
  // 是否显示多标签页
  showTabsBar: true,
  // 是否显示刷新组件
  showRefresh: true,
  // 是否显示搜索组件
  showSearch: true,
  // 是否显示主题组件
  showTheme: true,
  // 是否显示通知组件
  showNotice: true,
  // 是否显示全屏组件
  showFullScreen: true,
};
