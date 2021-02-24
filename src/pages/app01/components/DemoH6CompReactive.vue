<!--declares a demo component, No. is DemoH6
  
-->
<template>
  <fieldset>
    <legend align="left">DemoH6 reactive</legend>
    <DemoH6CompReactiveSub1></DemoH6CompReactiveSub1>
    <DemoH6CompReactiveSub2></DemoH6CompReactiveSub2>
    <DemoH6CompReactiveSub3></DemoH6CompReactiveSub3>
  </fieldset>
</template>

<script>
import DemoH6CompReactiveSub1 from "./DemoH6CompReactiveSub1.vue";
import DemoH6CompReactiveSub2 from "./DemoH6CompReactiveSub2.vue";
import DemoH6CompReactiveSub3 from "./DemoH6CompReactiveSub3.vue";
export default {
  name: "DemoH6CompReactive",
  components: {
    DemoH6CompReactiveSub1,
    DemoH6CompReactiveSub2,
    DemoH6CompReactiveSub3,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
