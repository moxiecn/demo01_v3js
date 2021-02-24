<!--declares a demo component, No. is DemoG2
  this chapter is about transitions by "<transition>".
-->
<template>
  <fieldset>
    <legend align="left">DemoG3 List transitions</legend>
    <fieldset>
      <legend align="left">G3-1 transitions</legend>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" :key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </fieldset>
    <fieldset>
      <legend align="left">G3-2 list move transitions</legend>
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
export default {
  name: "DemoG3CompListTrans",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle() {
      this.items = [1, 2, 30]; //_.shuffle(this.items)
    },
  },
};
</script>

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
