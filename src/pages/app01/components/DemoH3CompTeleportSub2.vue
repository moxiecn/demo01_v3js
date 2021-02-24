<!--declares a demo component, No. is DemoH3
-->
<template>
  <div>Hello, {{ name }}</div>
</template>

<script>
export default {
  name: "childComponent",
  props: ["name"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
