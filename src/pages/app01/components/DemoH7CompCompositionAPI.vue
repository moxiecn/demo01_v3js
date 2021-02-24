<!--declares a demo component, No. is DemoH7
  
-->
<template>
  <fieldset>
    <legend align="left">DemoH7 composition API</legend>
    <DemoH7CompReactiveSub1></DemoH7CompReactiveSub1>
  </fieldset>
</template>

<script>
import DemoH7CompReactiveSub1 from "./DemoH7CompReactiveSub1.vue";
export default {
  name: "DemoH7CompReactive",
  components: {
    DemoH7CompReactiveSub1,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
