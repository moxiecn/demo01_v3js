<template>
  <fieldset>
    <legend align="left">in compnent login</legend>
    <p>index logins</p>
    <button @click="toHome">toHome</button>
  </fieldset>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const toHome = () => {
      router.push({
        name: "home",
      });
    };
    return {
      toHome,
    };
  },
};
</script>

<style scoped>
</style>