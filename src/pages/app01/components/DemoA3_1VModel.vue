<!--declares a demo component, No. is DemoA3_1.
    this component will demo a usage of "v-model" dictate.
    v-model is a biodirectional binding instruction, it can be used not only to update from viewModel to view, but also to reserve.
-->
<template>
  <div id="DemoA3_1VModel">
    <fieldset>
      <legend align="left">DemoA3_1 v-model</legend>
      <span>
        <p>{{ message }}</p>
        <input v-model="message" />
      </span>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "DemoA3_1VModel",
  data() {
    return {
      message: "Hello VUE!",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a,
span {
  color: red;
}
</style>
