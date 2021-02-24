<template>
  <fieldset>
    <legend align="left">in compnent home</legend>
    <p>index home</p>
    <button @click="toLogin">to Login</button>
  </fieldset>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const toLogin = () => {
      router.push({
        name: "login",
      });
    };
    return {
      toLogin,
    };
  },
};
</script>

<style  scoped>
</style>