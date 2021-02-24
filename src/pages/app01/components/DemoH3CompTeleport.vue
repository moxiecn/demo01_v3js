<!--declares a demo component, No. is DemoH3
  H3: for details refer to https://vue3js.cn/docs/zh/guide/teleport.html#与-vue-components-一起使用
-->
<template>
  <fieldset>
    <legend align="left">DemoH3 teleport</legend>
    <fieldset>
      <legend align="left">H3-1 BASIC</legend>
      <button @click="modalOpen = true">
        Open full screen modal!
      </button>
    </fieldset>

    <fieldset>
      <legend align="left">H3-2 basic advance With teleport</legend>
      <button @click="modalOpen = true">
        Open full screen modal! (With teleport!)
      </button>
      <teleport to="body">
        <div v-if="modalOpen" class="modal">
          <div>
            I'm a teleported modal! (My parent is "body")
            <button @click="modalOpen = false">
              Close
            </button>
          </div>
        </div>
      </teleport>
    </fieldset>

    <fieldset>
      <legend align="left">H3-4 teleport with Vue components</legend>
      <h1>Root instance</h1>
      <parentComponent />
    </fieldset>

    <fieldset>
      <legend align="left">H3-5 Using multiple teleports on the same target</legend>
      <teleport to="#modals1">
        <div>A</div>
      </teleport>
      <teleport to="#modals1">
        <div>B</div>
      </teleport>
      <div id="modals1">
      </div>
      <!-- result-->

    </fieldset>

    <fieldset>
      <legend align="left">H3-7 </legend>
      <parentComponent />
    </fieldset>
    <div id="teleporttarget"></div>

    <fieldset>
      <legend align="left">H3-8 a popup window using teleport </legend>
      <div class="container">
        <childComponent3 />
      </div>
    </fieldset>
  </fieldset>
</template>

<script>
import { default as parentComponent } from "./DemoH3CompTeleportSub1.vue";
import { default as childComponent3 } from "./DemoH3CompTeleportSub4.vue";
export default {
  name: "DemoH3CompTeleport",
  data() {
    return {
      modalOpen: false,
    };
  },
  components: {
    parentComponent,
    childComponent3,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
