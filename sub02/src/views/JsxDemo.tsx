import { withModifiers, defineComponent, ref } from "vue";

export default defineComponent({
  name: "JsxDemo",
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };
    return () => <div onClick={withModifiers(inc, ["self"])}>111111111-{count.value}</div>;
  },
});
