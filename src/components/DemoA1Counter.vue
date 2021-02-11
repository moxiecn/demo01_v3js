<!--declares the first demo component, No. is DemoA1.
    this component shows the value of a Counter in browser.
-->
<template>
  <div id="demoA1Counter">
    <fieldset>
      <legend align="left">DemoA1 {{}}</legend>
      Counter: {{ counter }}
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "DemoA1Counter", //defines name for this component. this name will be used by the parent component that uses this component.
  //in other words, in App.vue, use the name like this <DemoA1Counter></DemoA1Counter>
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  props: {
    //defines custom property "counter" of the "DemoA1Counter" component .
    counter: String,
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
a {
  color: #42b983;
}
</style>
