<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button type="primary" @click="gotoLogin">跳转登录页</el-button>
    <el-button type="success" @click="gotoSub02">跳转sub02</el-button>
    <el-button type="primary" @click="updateName">更新姓名</el-button>
    <div>子应用菜单数据： {{ subMenus }}</div>
    <div>全局下发的用户数据： {{ userInfo }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { qiankunActions } from "../main";
export default defineComponent({
  name: "Home",
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
    // 用户数据
    const userInfo = computed(() => {
      return store.state.user.userInfo;
    });
    // 主应用跳转子应用
    const gotoSub02 = () => {
      router.push("/sub02/about");
    };
    const gotoLogin = () => {
      router.push("/login");
    };
    // 修改数据
    const updateName = () => {
      store.commit("user/UPDATE_USER_INFO", { name: "lizhijie", age: 29 });
      qiankunActions.setGlobalState({ userInfo: { name: "lizhijie", age: 29 } });
    };
    return {
      menus,
      subMenus,
      currentApp,
      userInfo,
      gotoSub02,
      gotoLogin,
      updateName,
    };
  },
});
</script>
