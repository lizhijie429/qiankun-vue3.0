<!--
 * @Author: lizhijie429
 * @Date: 2021-06-19 11:30:18
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-26 10:56:44
 * @Description: 
-->
<template>
  <div style="height: 100%">
    <div class="logo">
      <span class="site-name">ADMIN LITE</span>
    </div>
    <el-menu
      router
      class="side-menu"
      :uniqueOpened="true"
      :default-active="$route.path"
      @select="handleSelect"
      background-color="#00142a"
      text-color="hsla(0, 0%, 100%, .65)"
      active-text-color="#409EFF"
    >
      <el-menu-item v-for="item in subMenus" :key="item.name" :index="item.path">
        <i class="el-icon-menu"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "SideNav",
  methods: {},
  setup() {
    const router = useRouter();
    const store = useStore();
    // 所有菜单数据
    const menus = computed(() => {
      return store.state.menus.menusList;
    });
    // 获取当前模块的菜单数据
    const subMenus = computed(() => {
      if (currentApp.value === "home") {
        return [];
      } else {
        let subMenuList = null;
        menus.value.forEach((item: any) => {
          if (item.moduleName === currentApp.value) {
            subMenuList = item.menuList;
          }
        });
        return subMenuList;
      }
    });
    // 当前加载的模块
    const currentApp = computed(() => {
      return store.state.menus.currentApp;
    });
    const handleSelect = (key: string) => {
      store.dispatch("tabs/UPDATE_TABS_LIST", { router, key });
      store.commit("menus/SET_CURRENT_PAGE", key);
    };
    return {
      menus,
      subMenus,
      currentApp,
      handleSelect,
    };
  },
});
</script>

<style scoped>
.side-menu {
  width: 239px !important;
  height: calc(100% - 60px);
}
.logo {
  width: 239px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 64px;
  background: #002140;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
}
</style>
