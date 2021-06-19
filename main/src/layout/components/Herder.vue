<!--
 * @Author: lizhijie429
 * @Date: 2021-06-19 11:30:18
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-19 16:35:04
 * @Description: 
-->
<template>
  <div class="flex-row border-bottom" style="padding: 0px 20px; height: 60px">
    <el-menu class="flex-1 none-border" :default-active="currentModuleName" mode="horizontal">
      <el-menu-item index="home" @click="toHome">
        <i class="el-icon-menu"></i>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
    </el-menu>
    <div class="flex-row flex-items-center">
      <div style="padding-right: 20px">全局数据：{{ userName }}</div>
      <div class="menu-icons">
        <span class="menu-icon">
          <i class="el-icon-search icon" />
        </span>
        <span class="menu-icon">
          <i class="el-icon-message icon" />
        </span>
        <span class="menu-icon">
          <el-badge is-dot class="item">
            <i class="el-icon-bell icon" />
          </el-badge>
        </span>
      </div>
      <div class="cursor-pointer" style="height: 60px">
        <span v-if="!isScresnFull" class="qiankun-font iconfont icon-screen-full" @click="screenfullClick()"></span>
        <span v-else class="qiankun-font iconfont icon-screen-exit" @click="screenfullClick()"></span>
      </div>
      <el-dropdown @command="handleCommand">
        <div class="flex-row flex-items-center cursor-pointer">
          <el-avatar class="border" :src="avatarImg"></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="setting">修改用户名</el-dropdown-item>
            <el-dropdown-item command="logout">跳转登录页</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import screenfull from "screenfull";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "Header",
  setup() {
    const router = useRouter();
    const store = useStore();
    const avatarImg = ref<string>("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png");
    const isScresnFull = ref<boolean>(false);
    const userName = ref<string>("lizhijie");
    const currentModuleName = ref<string>("home");
    const toHome = () => {
      router.push({ path: "/home" });
    };
    const screenfullClick = () => {
      if (screenfull.isEnabled) {
        screenfull.toggle();
        isScresnFull.value = !isScresnFull.value;
      }
    };
    const handleCommand = (command: string) => {
      if (command === "logout") {
        router.push({ path: "/login" });
        return;
      }
      if (command === "setting") {
        store.commit("UPDATE_USER_INFO_ITEM", { key: "userInfo", value: { name: "zhangsan" } });
        // this.$actions.setGlobalState({ userInfo: { name: "zhangsan" } });
      }
    };
    return {
      avatarImg,
      isScresnFull,
      userName,
      currentModuleName,
      toHome,
      screenfullClick,
      handleCommand,
    };
  },
});
</script>

<style lang="scss" scoped>
.qiankun-font {
  font-size: 22px;
  padding-right: 20px;
  line-height: 60px;
}
.menu-icons {
  padding-right: 20px;
  display: flex;
  align-items: center;
  .menu-icon {
    padding: 0 12px;
    cursor: pointer;
    .icon {
      display: inline-block;
      font-size: 18px;
      text-align: center;
    }
  }
}
</style>
