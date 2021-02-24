<!--declares a demo component, No. is DemoH6
  
-->
<template>
  <div>{{ count }}</div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";
const count = ref(1);
const plusOne = computed(() => count.value++);
console.log("DemoH6CompReactiveSub2, 01");
console.log(plusOne.value); // 2
plusOne.value++; // error

const count2 = ref(1);
const plusOne2 = computed({
  get: () => count2.value + 1,
  set: (val) => {
    count2.value = val - 1;
  },
});
plusOne2.value = 1;
console.log("DemoH6CompReactiveSub2, 02");
console.log(count2.value); // 0

const count3 = ref(0);
const stop = watchEffect(() => {
  console.log("DemoH6CompReactiveSub2, 03");
  console.log(count3.value);
});

stop(); //call stop directly to stop watchEffect().
// -> logs 0
setTimeout(() => {
  count3.value++;
  // -> logs 1
}, 100);

export default {
  name: "DemoH6CompReactiveSub2",
  setup() {
    const count = ref(0);
    watchEffect(
      () => {
        //to-do: a side effect
        console.log(count.value);
      },
      {
        flush: "post", //pre,sync
      },
      {
        // it works only in dev mode.
        onTrack(e) {
          console.log("DemoH6CompReactiveSub2, onTrack");
          console.log(e);
        },
      },
      {
        // it works only in dev mode.
        onTrigger(e) {
          console.log("DemoH6CompReactiveSub2, ontrigger");
          console.log(e);
        },
      }
    );
    return {
      count,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
