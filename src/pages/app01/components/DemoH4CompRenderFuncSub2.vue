<!--declares a demo component, No. is DemoH4
  H3: for details refer to https://vue3js.cn/docs/zh/guide/render-function.html#dom-树
-->
<template>
  <fieldset>
    <legend align="left">H4-2 render functions ADV</legend>
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot></slot>
    </h6>
  </fieldset>
</template>

<script>
import { h } from "vue";
export default {
  name: "Demoh4CompAnchoredHeadingAdv",
  render() {
    // const { h } = Vue
    const hh = h(
      "h" + this.level, // tag name
      {}, // props/attributes
      this.$slots.default() // array of children
    );
    return hh;
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
