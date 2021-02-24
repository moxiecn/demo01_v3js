<!--declares a demo component, No. is DemoH1
  this chapter is about mixin.
-->
<template>
  <fieldset>
    <legend align="left">DemoH1 List transitions</legend>
    <fieldset>
      <legend align="left">H1-1 transitions</legend>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" :key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </fieldset>
    <fieldset>
      <legend align="left">H1-2 list move transitions</legend>
      <button @click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </transition-group>
    </fieldset>
  </fieldset>
</template>

<script>
const myMixin1 = {
  data() {
    return {
      message: "hello",
      foo: "abc",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  created() {
    console.log("mixin hook called");
  },
};
export default {
  name: "DemoH1CompMixin",
  mixins: [myMixin1],
  data() {
    return {
      message: "goodbye",
      bar: "def",
    };
  },
  created() {
    console.log(this.$data); // => { message: "goodbye", foo: "abc", bar: "def" }
    console.log("component hook called");
  },
};
</script>
//
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flip-list-move {
  transition: transform 0.8s ease;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
