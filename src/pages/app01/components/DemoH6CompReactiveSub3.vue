<!--declares a demo component, No. is DemoH6
  this demo is from https://blog.csdn.net/qq_41206257/article/details/111900363

-->
<template>
  <h1>{{ val }}</h1>
  <HelloWorld />
</template>

<script>
import { ref, computed, provide, reactive } from "vue";
import HelloWorld from "./DemoH6CompReactiveSub31";
export default {
  name: "DemoH6CompReactiveSub3",
  components: { HelloWorld },
  setup(props, context) {
    const val = ref(0); // this is a reactivity property. so if it is updated that msg computed property will be updated synchronously.
    setInterval(() => {
      val.value++;
    }, 1000);
    const msg = computed(() => {
      return val.value * 1024;
    });
    // 提供
    provide("message", msg);

    // 修改 provide，并且同时响应在了子组件中,
    const handler = (arg) => {
      console.log("emit", arg);
      val.value = arg;
    };
    provide("value", val);
    provide("handler", handler); //供应到子组件中，当子组件中产生随机数后并回调本函数后执行console.log("emit",arg)逻辑

    // Attribute (非响应式对象)
    console.log("DEMOH6Sub3-attrs:");
    console.log(context.attrs);
    // 插槽 (非响应式对象)
    console.log("DEMOH6Sub3-slots:");
    console.log(context.slots);
    // 触发事件 (方法)
    console.log("DEMOH6Sub3-emit:");
    console.log(context.emit);

    return { val, msg, handler };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
