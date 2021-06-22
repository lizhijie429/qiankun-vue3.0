<!--
 * @Author: lizhijie429
 * @Date: 2021-06-19 11:30:18
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-22 15:04:36
 * @Description: 
-->
<template>
  <div style="height: 100%">
    <div class="logo">
      <span class="site-name">ADMIN LITE</span>
    </div>
    <el-menu
      class="side-menu"
      :uniqueOpened="true"
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      background-color="#00142a"
      text-color="hsla(0, 0%, 100%, .65)"
      active-text-color="#409EFF"
    >
      <el-menu-item v-for="item in menus" :key="item.name" :index="item.path">
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
    const menus = computed(() => {
      return store.getters.getSubMenus;
    });
    const handleOpen = (key: string | null, keyPath: string | null) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string | null, keyPath: string | null) => {
      console.log(key, keyPath);
    };
    return {
      menus,
      handleOpen,
      handleClose,
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
