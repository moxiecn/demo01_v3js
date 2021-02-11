<!--declares a demo component, No. is DemoA3.
    this component will demo a usage of "v-bind" dictate.
    v-bind is a unidirectional binding instruction, it can only be used to update from viewModel to view, not backward.
    v-bind must be used to bind the value of a html tag some attributes to a attribute defined by "props". 
    in other words, In the attributes of the htmltag the form {{}} of assignment can not be used, only use v-bind.
-->
<template>
  <div id="DemoA3BindAttribute">
    <fieldset>
      <legend align="left">DemoA3 v-bind</legend>
      <span v-bind:title="message">
        Hover the mouse of a few seconds on this text to view the prompt message
        of dynamic binding here ！
        <p />
        v-bind:title="message" can also be written as :title="message"
      </span>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "DemoA3BindAttribute",
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
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
