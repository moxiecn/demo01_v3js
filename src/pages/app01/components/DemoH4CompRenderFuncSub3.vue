<!--declares a demo component, No. is DemoH4
  H3: for details refer to https://vue3js.cn/docs/zh/guide/render-function.html#dom-树
-->
<template>
  <fieldset>
    <legend align="left">H4-3 virtual dom tree and h() parameters</legend>
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

/** Recursively get text from children nodes */
function getChildrenTextContent(children) {
  return children
    .map((node) => {
      return typeof node.children === "string"
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : "";
    })
    .join("");
}
export default {
  name: "Demoh4CompH",
  render() {
    // create kebab-case id from the text contents of the children
    const headingId = getChildrenTextContent(this.$slots.default())
      .toLowerCase()
      .replace(/\W+/g, "-") // replace non-word characters with dash
      .replace(/(^-|-$)/g, ""); // remove leading and trailing dashes

    return h("h" + this.level, [
      h(
        "a",
        {
          name: headingId,
          href: "#" + headingId,
        },
        this.$slots.default()
      ),
    ]);
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
