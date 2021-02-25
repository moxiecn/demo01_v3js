<template>
  <div class="home">
    <h2>HomeSpread页面的数字(...map*--store.num):{{num}}</h2>
    <h2>HomeSpread页面的数字(...map*--store.getNum):{{getNum}}</h2>
    <h2>HomeSpread页面的数字(...map*--store.numString):{{numString}}</h2>
    <h2>HomeSpread页面的数字(cp--computedPropertyNum=store.num):{{computedPropertyNum}}</h2>
    <h2>HomeSpread页面的数字(cp--computedPropertyGetNum=store.getNum):{{computedPropertyGetNum}}</h2>
    <h2>HomeSpread页面的数字(cp--computedPropertyNumString=store.numString):{{computedPropertyNumString}}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "home",
  // mapstate() and mapGetters() should be writted in "computed" property, it is equivalent to various field in computed property,
  // the array values in the paremeters of these two functions should be equal to the field name in "state" and "getters" of store instance.
  computed: {
    //"num" is equivalent to call method computedPropertyNum.
    //"numString" is equivalent to call method computedPropertyNumString.
    ...mapState(["num", "numString"]),
    //"getNum" is equivalent to call method computedPropertyGetNum.
    ...mapGetters(["getNum", "getNumString"]),
    computedPropertyNum() {
      return this.$store.state.num;
    },
    computedPropertyGetNum() {
      return this.$store.getters.getNum;
    },
    computedPropertyNumString() {
      return this.$store.state.numString;
    },
  },
};
</script>
