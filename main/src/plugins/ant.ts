import Button from "ant-design-vue";
import "ant-design-vue/lib/button/style";
import ConfigProvider from "ant-design-vue";
import "ant-design-vue/lib/config-provider";
import Radio from "ant-design-vue";
import "ant-design-vue/lib/radio/style";
import message from "ant-design-vue";
import "ant-design-vue/lib/message";
import Layout from "ant-design-vue";
import "ant-design-vue/lib/layout";

function useAnt(app: any) {
  app.use(Layout);
  app.use(Button);
  app.use(ConfigProvider);
  app.use(Radio);
  app.config.globalProperties.$message = message;
}

export default useAnt;
