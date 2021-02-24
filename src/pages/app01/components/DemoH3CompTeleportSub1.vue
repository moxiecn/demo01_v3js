<!--declares a demo component, No. is DemoH3
-->
<template>
  <h2>This is a parent component</h2>
  <teleport to="body">
    <childComponent name="John" />
  </teleport>

  <button @click="showToast" class="btn">打开 toast</button>
  <!-- to 属性就是目标位置 -->
  <teleport to="#teleport-target">
    <div v-if="visible" class="toast-wrap">
      <div class="toast-msg">我是一个 Toast 文案</div>
    </div>
  </teleport>

</template>

<script>
import { ref } from "vue";
import childComponent from "./DemoH3CompTeleportSub2.vue";
export default {
  name: "parentComponent",
  components: {
    childComponent,
  },
  setup() {
    // toast 的封装
    const visible = ref(false);
    let timer;
    const showToast = () => {
      visible.value = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        visible.value = false;
      }, 2000);
    };
    return {
      visible,
      showToast,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
