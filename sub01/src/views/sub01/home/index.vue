<template>
  <div class="home">
    <el-button type="primary" @click="updateName">子应用更新姓名</el-button>
    <el-button type="primary" @click="gotoHome">跳转主应用首页</el-button>
    <el-button type="success" @click="gotoSub02">跳转sub02</el-button>
    <img alt="Vue logo" src="../../../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const store = useStore();
    // 子应用修改主应用下发的数据
    const updateName = () => {
      store.dispatch("global/setGlobalState", { userInfo: { name: "sub01修改了用户名", age: 1 } });
    };
    // 跳转主应用
    const gotoHome = () => {
      history.pushState(null, "", "/home");
    };
    // 子应用之间跳转
    const gotoSub02 = () => {
      history.pushState(null, "sub02", "/sub02/about");
    };
    return {
      updateName,
      gotoHome,
      gotoSub02,
    };
  },
});
</script>
