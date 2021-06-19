<!--
 * @Author: lizhijie429
 * @Date: 2021-06-19 11:30:18
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-19 16:54:45
 * @Description: 
-->
<template>
  <div class="tabs-box flex-row flex-items-center">
    <div class="tabs-item paas-flex-cc">
      <span class="tabs-item-hover">
        <span class="cursor-pointer fs-14 tabs-item-text" @click="handleClick()">首页</span>
        <i class="el-icon-close tabs-remove-icon cursor-pointer" @click="removeTab()"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "Tabs",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const menus = computed(() => {
      return store.state.permission.menus;
    });
    const currentPage = computed(() => {
      return store.state.permission.currentPage;
    });
    const tabsList = computed(() => {
      return store.state.tabs.tabsList;
    });
    const handleClick = () => {
      console.log("handleClick");
    };
    const removeTab = () => {
      console.log("handleClick");
    };
    return {
      menus,
      currentPage,
      tabsList,
    };
  },
});
</script>

<style lang="scss" scoped>
.tabs-box {
  height: 0.32rem;
  padding: 0.1rem;
  .tabs-item {
    height: 100%;
    padding-left: 0.12rem;
    padding-right: 0.1rem;
    margin-right: 0.1rem;
    background-color: #fff;
    border-radius: 0.04rem;
    color: #333;
    font-size: 0.14rem;
    line-height: 0.32rem;
    white-space: nowrap;
    .tabs-item-text {
      &:hover {
        color: #23b7e5;
      }
    }
    .tabs-remove-icon {
      margin-left: 0.04rem;
      padding: 0.02rem;
      font-size: 0.04px;
      cursor: pointer;
    }
    .tabs-remove-icon:hover {
      border-radius: 50%;
      color: #fff;
      background-color: #23b7e5;
    }
  }
  .tabs-item:last-child {
    border-right: none !important;
  }
}
.tabs-item-hover {
  color: #23b7e5 !important;
}
</style>
