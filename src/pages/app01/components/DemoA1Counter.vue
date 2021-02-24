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
import { mapState } from "vuex";
export default {
  name: "DemoA1Counter", //defines name for this component. this name will be used by the parent component that uses this component.
  //in other words, in App.vue, use the name like this <DemoA1Counter></DemoA1Counter>
  data() {
    return {
      localCount: 0,
    };
  },
  props: {
    //defines custom property "counter" of the "DemoA1Counter" component .
    counter: [String, Number],
  },
  computed: mapState({
    // arrow functions can make the code very succinct! state.count is declared in main.js.
    count: (state) => state.count,
    // passing the string value 'count' is same as `state => state.count`
    countAlias: "count",
    // to access local state with `this`, a normal function must be used
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
    localComputed() {
      /* ... */
    },
    // mix this into the outer object with the object spread operator
    ...mapState({
      // ...
    }),
  }),
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
