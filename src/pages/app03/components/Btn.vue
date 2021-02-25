<template>
  <div class="btn">
    <button v-on:click="$store.commit('increase', 2)">点击加2,click中直接写</button>
    <button v-on:click="addFn(2)">点击加2，直接在method中定义方法调用mutations</button>
    <button v-on:click="minusFn(1)">点击减值（异步）,直接在method中定义方法调用actions</button>
    <button v-on:click="increase(3)">点击加3,mapMutations</button>
    <button v-on:click="decrease(1)">点击减1,mapMutations</button>
    <button v-on:click="decreaseAsync(1)">点击减1,mapActions</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { MUTATIONS_TYPE } from "../store/modules/mutations_type.js";
export default {
  name: "btn",
  methods: {
    addFn: function (step) {
      // the "increase" method in the store's mutations field must be called with "$store.commit" way.
      // if pass extra parameter , use the second paramater "payload", payload can use a numeric, a string or a object.
      this.$store.commit("increase", step);
    },
    minusFn(step) {
      // this example demonstrates how to call store's "actions" in the component's "methods", it must use "dispatch" way to do.
      this.$store.dispatch("decreaseAsync", step);
    },

    //defines method through module "mutations_type.js".
    ...mapMutations([MUTATIONS_TYPE.INCREASE, MUTATIONS_TYPE.DECREASE]),

    //write out method in store directly.
    ...mapMutations(["increase", "decrease"]),
    ...mapActions(["decreaseAsync"]),
  },
};
</script>
