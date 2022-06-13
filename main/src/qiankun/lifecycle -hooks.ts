/* qiankun全局声明周期钩子 */
export const LifecycleHooks = {
  beforeLoad: [
    (app) => {
      console.log(
        "%c before load",
        "background:#3a5ab0 ; padding: 1px; border-radius: 3px;  color: #fff",
        app
      );
    },
  ], // 预加载
  beforeMount: [
    (app) => {
      console.log(
        "%c before mount",
        "background:#7d9553 ; padding: 1px; border-radius: 3px;  color: #fff",
        app
      );
    },
  ], // 挂载前回调
  afterMount: [
    (app) => {
      console.log(
        "%c after mount",
        "background:#7d7453 ; padding: 1px; border-radius: 3px;  color: #fff",
        app
      );
    },
  ], // 挂载后回调
  beforeUnmount: [
    (app) => {
      console.log(
        "%c before unmount",
        "background:#7dd253 ; padding: 1px; border-radius: 3px;  color: #fff",
        app
      );
    },
  ], // 卸载前回调
  afterUnmount: [
    (app) => {
      console.log(
        "%c after unmount",
        "background:#d2525c ; padding: 1px; border-radius: 3px;  color: #fff",
        app
      );
    },
  ], // 卸载后回调
};
