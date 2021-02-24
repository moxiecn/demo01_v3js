<!--declares a demo component, No. is DemoG1
  this chapter is about transitions and animations.
-->
<template>
  <fieldset>
    <legend align="left">DemoG1 animations</legend>
    <fieldset>
      <legend align="left">G1-1 animations</legend>
      <span>
        {{ rawHtml11 }}
      </span>
      <div :class="{ shake: noActivated }">
        <button @click="noActivated = true">Click to shake</button>
        <button @click="noActivated = false">Click to close</button>
        <span v-if="noActivated">Oh no!</span>
      </div>
    </fieldset>
    <fieldset>
      <legend align="left">G1-2 transitions and styles binding</legend>
      <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
        <h3>Move your mouse across the screen...</h3>
        <div text-align="left">in this example, it is creating animation through the use of interpolation(${x}).</div>
        <p>x: {{ x }}</p>
      </div>
      <button @click="noActivated = true" class="button">Click to shake</button>
    </fieldset>
  </fieldset>
</template>

<script>
export default {
  name: "DemoG1CompTranAnim",
  data() {
    return {
      noActivated: false,
      rawHtml11:
        "activate an animation without mounting a <transition>component, by adding a conditional class.",
      x: 0,
    };
  },
  methods: {
    xCoordinate: function (e) {
      this.x = e.clientX;
    },
  },
};
</script>
//
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  background: #063e24;
  /* 应用于初始状态，因此此转换将应用于返回状态 */
  transition: background 0.25s ease-in;
}
.button:hover {
  background: #99ffd1;
  /* 应用于悬停状态，因此在触发悬停时将应用此过渡 */
  transition: background 0.45s ease-out;
}

.movearea {
  transition: 0.2s background-color ease;
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  /*the following 3 items will allow the browser to know we need hardware acceleration in order to improve performance.*/
  transform: translate3d(10, 10, 10);
  backface-visibility: hidden;
  perspective: 1000px;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
a,
span {
  color: red;
}
</style>
