<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      {{ subMenus }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
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

    return {
      menus,
      subMenus,
      currentApp,
    };
  },
});
</script>
