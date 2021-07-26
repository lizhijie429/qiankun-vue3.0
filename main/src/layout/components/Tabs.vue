<!--
 * @Author: lizhijie429
 * @Date: 2021-06-19 11:30:18
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-07-26 17:34:43
 * @Description: 
-->
<template>
  <div class="tabs-box flex-row flex-items-center">
    <div class="tabs-item paas-flex-cc">
      <span :class="{ 'tabs-item-hover': currentPage === '/home' }">
        <span class="cursor-pointer fs-14 tabs-item-text" @click="handleClick('/home')">首页</span>
        <i class="el-icon-close tabs-remove-icon cursor-pointer" @click="removeTab()"></i>
      </span>
    </div>
    <template v-if="tabsList.length > 0">
      <div class="tabs-item paas-flex-cc" v-for="item in tabsList" :key="item.path">
        <span :class="{ 'tabs-item-hover': currentPage === item.path }">
          <span class="cursor-pointer fs-14 tabs-item-text" @click="handleClick(item)">{{ item.title }}</span>
          <i class="el-icon-close tabs-remove-icon cursor-pointer" @click="removeTab(item)"></i>
        </span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRaw } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { InterRoutes } from "../../interface/MenusInterface";
export default defineComponent({
  name: "Tabs",
  setup() {
    const router = useRouter();
    const store = useStore();
    const menus = computed(() => {
      return store.state.menus.menusList;
    });
    const currentPage = computed(() => {
      return store.state.menus.currentPage;
    });
    const tabsList = computed(() => {
      return store.state.tabs.tabsList;
    });
    const handleClick = (val: InterRoutes) => {
      store.commit("menus/SET_CURRENT_APP", val.moduleName);
      store.commit("menus/SET_CURRENT_PAGE", val.path);
      store.dispatch("tabs/UPDATE_TABS_HOVER", { router, key: val.path });
    };
    const removeTab = (val: InterRoutes) => {
      let tabsData = toRaw(tabsList.value);
      tabsData.forEach((element: InterRoutes) => {
        if (element.path !== currentPage.value && element.path === val.path) {
          store.commit("tabs/REMOVE_ANY_TAB", { router, tabsItem: element });
        } else {
          const index = tabsData.indexOf(toRaw(val));
          if (index !== -1 && tabsData.length === index + 1 && tabsData.length > 1) {
            const tabsItem = tabsData[index - 1];
            store.commit("menus/SET_CURRENT_APP", tabsItem.moduleName);
            store.commit("menus/SET_CURRENT_PAGE", tabsItem.path);
            store.commit("tabs/REMOVE_ANY_TAB", { router, tabsItem: element });
          }
        }
      });
    };
    return {
      menus,
      currentPage,
      tabsList,
      handleClick,
      removeTab,
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
