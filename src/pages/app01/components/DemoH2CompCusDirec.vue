<!--declares a demo component, No. is DemoH1
  H2-1: A input tag get a focus automatically by a custom directive "v-focus"
-->
<template>
  <fieldset>
    <legend align="left">DemoH2 Custom directives</legend>
    <fieldset>
      <legend align="left">H2-1 BASIC</legend>
      <input v-focus />
    </fieldset>
    <fieldset>
      <legend align="left">H2-2 custom directives parameter</legend>
      <div>
        <h2>Scroll down the page</h2>
        <input type="range" min="0" max="500" v-model="pinPadding" />
        <p v-custompin:[direction]="pinPadding">
          Stick me {{ pinPadding + 'px' }} from the {{ direction }} of the page
        </p>
        Stick me {{ pinPadding + 'px' }} from the {{ direction }} of the page
      </div>
    </fieldset>
    <fieldset>
      <legend align="left">H2-3 custom directives literals</legend>
      <div v-objectLiterals="{ color: 'white', text: 'hello!' }"></div>
    </fieldset>
  </fieldset>
</template>

<script>
const vv = {
  name: "DemoH2CompCusDirec",
  data() {
    return {
      direction: "right",
      pinPadding: 200,
    };
  },
  created() {
    console.log("DemoH2CompCusDirec's attributes:"); // => "hello!"
    console.log(this.$attrs); // => "hello!"
  },
  directives: {
    focus: {
      // 指令的定义
      mounted(el, binding) {
        el.focus();
        console.info(binding);
      },
    },
    custompin: {
      // 指令的定义
      mounted(el, binding) {
        el.style.position = "fixed";
        const s = binding.arg || "top";
        el.style[s] = binding.value + "px";
        console.error(el);
      },
      updated(el, binding) {
        const s = binding.arg || "top";
        el.style[s] = binding.value + "px";
        console.info(binding);
      },
    },
    objectLiterals: {
      mounted(el, binding) {
        console.log(binding.value.color); // => "white"
        console.log(binding.value.text); // => "hello!"
      },
      updated(el, binding) {
        console.log(binding.value.color); // => "white"
        console.log(binding.value.text); // => "hello!"
      },
    },
  },
};
export default vv;
</script>
//
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
