<template>
  <div class="about">
    <h2>About页面的数字(num):{{num}}</h2>
    <h2>About页面的数字($store.state.num):{{$store.state.num}}</h2>
    <h2>About页面的数字($store.getters.num):{{$store.getters.getNum}}</h2>
  </div>
</template>

<script>
export default {
  name: "about",
  computed: {
    num: function () {
      return this.$store.state.num;
    },
  },
};
</script>
