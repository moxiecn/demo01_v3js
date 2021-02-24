<template>
  <div class="us">
    <h2>User Settings</h2>
    <UserSettingsNav />
    <router-view name="demo04_content" class="us__content">
    </router-view>

    <transition name="slide-left">
      <router-view name="demo04_helper" class="us__content us__content--helper" />
    </transition>
  </div>
</template>

<script>
import UserSettingsNav from "./UserSettingsNav.vue";
export default {
  components: { UserSettingsNav },
};
</script>
