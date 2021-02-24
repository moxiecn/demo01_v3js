<template>
  <div class="user">
    <fieldset>
      <legend align="left">in compnent User</legend>
      <h2>userName by $route: {{ $route.params.username }}</h2>
      <h2>userName by props: {{ username }}</h2>
      <router-view></router-view>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["username"],
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
      }
    );
  },
  async beforeRouteUpdate(to, from) {
    //  导航守卫,对路由变化做出响应...
    //this.userData = await fetchUser(to.params.id)
  },
};
</script>