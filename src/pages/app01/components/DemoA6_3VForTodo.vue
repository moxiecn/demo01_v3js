<!--declares a demo component, No. is DemoA6_2.
    this component will demo a usage of "v-For" instruction.
-->
<template>
  <li>
    not enabled.
    {{ titleId }} is {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  name: "DemoA6_3VForTodo",
  props: ["titleId", "title"],
  methods: {},
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
