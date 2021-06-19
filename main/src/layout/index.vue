<!--
 * @Author: lizhijie429
 * @Date: 2021-06-19 10:29:17
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-19 16:52:17
 * @Description: 
-->
<template>
  <el-container style="height: 100%">
    <el-aside class="aside-nav" width="240px">
      <side-nav></side-nav>
    </el-aside>
    <el-container>
      <el-header>
        <herder></herder>
      </el-header>
      <tabs></tabs>
      <el-main>
        <div v-if="!isMain" id="subView"></div>
        <router-view v-else></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Herder, SideNav, Tabs } from "./components/index";
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  components: { Herder, SideNav, Tabs },
  setup() {
    const route = useRoute();
    return {
      isMain: computed(() => {
        return route.meta.isMain;
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
.aside-nav {
  height: 100%;
  text-align: left;
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
