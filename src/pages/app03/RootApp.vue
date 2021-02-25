<template>
  <div id="app03">
    <home></home>
    <hr>
    <about></about>
    <hr>
    <h2>
      <btn></btn>
    </h2>
    <hr>
    <home-spread></home-spread>
    <hr>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Btn from "./components/Btn.vue";
import HomeSpread from "./components/HomeSpread.vue";

export default {
  name: "RootApp",
  components: { Home: Home, About: About, Btn, HomeSpread },
};
</script>


<style>
@import url(../../../src/assets/global.css);
</style>
