<template>
  <div class="home">
    <h2>Home页面的数字(num):{{num}}</h2>
    <h2>Home页面的数字($store.state.num):{{$store.state.num}}</h2>
    <h2>Home页面的数字($store.getters.num):{{$store.getters.getNum}}</h2>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    num() {
      return this.$store.state.num;
    },
  },
};
</script>
