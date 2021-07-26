<!--
 * @Author: lizhijie429
 * @Date: 2021-06-19 10:29:17
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-26 11:11:06
 * @Description: 
-->
<template>
  <el-container style="height: 100%">
    <el-aside class="aside-nav" width="240px">
      <side-nav></side-nav>
    </el-aside>
    <el-container>
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <tabs></tabs>
      <el-main>
        <div v-if="!isMain" id="subapp-viewport"></div>
        <router-view v-else></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { HeaderNav, SideNav, Tabs } from "./components/index";
import { computed, defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { registerApps } from "../main";
import { useStore } from "vuex";
import { InterRoutes } from "../interface/MenusInterface";
import { qiankunActions } from "../main";
export default defineComponent({
  components: { HeaderNav, SideNav, Tabs },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    // 所有菜单数据
    const routers = computed(() => {
      return store.state.menus.routers;
    });
    // 判断当前加载子应用是否为主应用
    const isMain = computed(() => {
      return route && route.meta && route.meta.isMain;
    });
    // 初始化项目工程（处理一些数据持久化的事）
    onMounted(() => {
      // 子应用启动
      let tem: any = window;
      if (!tem.qiankunStarted) {
        tem.qiankunStarted = true;
        registerApps();
      }
      // 页面持久化数据处理
      let currentPage: string | null = sessionStorage.getItem("currentPage");
      routers.value.forEach((item: InterRoutes) => {
        item.path === currentPage && store.commit("menus/SET_CURRENT_APP", item.moduleName);
      });
      if (currentPage !== null) {
        qiankunActions.setGlobalState({ routers: store.state.menus.routers });
        store.commit("menus/SET_CURRENT_PAGE", currentPage);
        store.dispatch("tabs/UPDATE_TABS_LIST", { router, key: currentPage });
        // router.push(currentPage);
      } else {
        store.commit("menus/SET_CURRENT_PAGE", "/home");
        router.push("/home");
      }
    });
    return {
      isMain,
    };
  },
});
</script>

<style lang="scss" scoped>
.aside-nav {
  height: 100%;
  text-align: left;
  padding: 0 !important;
}
.el-header,
.el-footer {
  padding: 0;
  color: #333;
  text-align: center;
  background-color: #fff;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.el-main {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.el-main {
  margin: 0 0.1rem 0.1rem;
  padding: 0.2rem;
  background-color: #fff;
}
</style>
