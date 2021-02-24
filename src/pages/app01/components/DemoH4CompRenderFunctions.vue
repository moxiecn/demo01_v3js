<!--declares a demo component, No. is DemoH4
  H3: for details refer to https://vue3js.cn/docs/zh/guide/render-function.html#dom-树
-->
<template>
  <fieldset>
    <legend align="left">DemoH4 render functions</legend>
    <demoh4-comp-anchored-heading :level="4">Hello world, VUE!</demoh4-comp-anchored-heading>
    <demoh4-comp-anchored-heading-adv :level="1">Hello VUE!</demoh4-comp-anchored-heading-adv>
    <Demoh4CompH :level="1">Hello VUE!！</Demoh4CompH>
  </fieldset>
</template>

<script>
import { default as Demoh4CompAnchoredHeading } from "./DemoH4CompRenderFuncSub1.vue";
import Demoh4CompAnchoredHeadingAdv from "./DemoH4CompRenderFuncSub2.vue";
import Demoh4CompH from "./DemoH4CompRenderFuncSub3.vue";
export default {
  name: "DemoH4CompRenderFunctions",
  data() {
    return {
      modalOpen: false,
    };
  },
  components: {
    Demoh4CompAnchoredHeading,
    Demoh4CompAnchoredHeadingAdv,
    Demoh4CompH,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
