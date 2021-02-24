<!--declares a demo component, No. is DemoH6
  this demo is from https://blog.csdn.net/qq_41206257/article/details/111900363

-->
<template>
  <h3>children prop: {{ message }}. it it from its parent comp.</h3>
  <h3>children prop: {{ value }}. it it from its parent comp.</h3>
  <button @click="handler">change inject</button>
</template>

<script>
import { inject } from "vue";
export default {
  name: "HelloWorld",
  // eslint-disable-next-line no-unused-vars
  setup(props, context) {
    // 注入
    const message = inject("message");

    const value = inject("value");
    const handlerProvide = inject("handler");
    const handler = () => {
      //本函数将生成一个随机数，并调用父组件供应的handler函数，来改变父组件中val.value
      const arg = Math.floor(Math.random() * 10) + 1;
      handlerProvide(arg);
    };
    return { message, value, handler };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
