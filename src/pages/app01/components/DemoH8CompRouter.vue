<!--declares a demo component, No. is DemoH7
  
-->
<template>
  <fieldset>
    <legend align="left">DemoH8 vue router</legend>
    <fieldset>
      <legend align="left">ROUTER RESULT</legend>
      <router-view title="router result"></router-view>
    </fieldset>
    <fieldset>
      <legend align="left">demo01 BASIC</legend>
      <div id='routerTestNav'>
        <router-link to='/home'> Home</router-link><br />
        <router-link to='/login'>login </router-link>
      </div>
    </fieldset>
    <fieldset>
      <legend align="left">demo02: NESTED router Views</legend>
      <p>
        <router-link to="/users/eduardo">/users/eduardo</router-link>
        <br />
        <router-link to="/users/eduardo/profile">/users/eduardo/profile</router-link>
        <br />
        <router-link to="/users/eduardo/posts">/users/eduardo/posts</router-link>
      </p>
    </fieldset>
    <fieldset>
      <legend align="left">demo03: named Vsiews</legend>
      <router-link to="/demo03/schemaA">/demo03/schemaA</router-link>&nbsp;
      <router-link to="/demo03/schemaB">/demo03/schemaB</router-link>
      <router-view title="router result" name="demo03_a"></router-view>
      <router-view title="router result" name="demo03_b"></router-view>
      <router-view title="router result" name="demo03_c"></router-view>
    </fieldset>
    <fieldset>
      <legend align="left">demo04: nested named Vsiews</legend>
      <router-link to="/demo04/settings">/demo04/settings</router-link>
      <router-view title="router result" name="demo04_main"></router-view>
    </fieldset>
  </fieldset>
</template>

<script>
import UserSettings from "../router/components/demo04/UserSettings";
export default {
  name: "DemoH8Router",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
