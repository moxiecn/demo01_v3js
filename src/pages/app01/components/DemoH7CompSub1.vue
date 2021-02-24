<!--declares a demo component, No. is DemoH7
  
-->
<template>
  <div>
    <span>{{ count }}</span>
    <button @click="count ++">Increment count</button>
  </div>
</template>

<script>
import { ref } from "vue";

const dinner = {
  meal: "tacos",
};

//const isObject = (val) => val !== null && typeof val === "object";
//const convert = (target) => (isObject(target) ? reactive(target) : target);
//const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (target, key) => hasOwnProperty.call(target, key);
let targetMap = new WeakMap();
let activeEffect;
const handler2 = {
  get(target, prop, receiver) {
    console.log("handler2, get intercepted.");
    console.log(target);
    console.log(prop);
    console.log(receiver);
    track(target, prop);
    return Reflect.get(...arguments);
  },
  set(target, key, value, receiver) {
    console.log("handler2, set intercepted.");
    console.log(target);
    console.log(key);
    console.log(value);
    console.log(receiver);
    trigger(target, key);
    return Reflect.set(...arguments);
  },
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const result = Reflect.deleteProperty(target, key);
    if (hadKey && result) {
      // 触发更新
      trigger(target, key);
    }
    return result;
  },
};
const proxy2 = new Proxy(dinner, handler2);
console.log(proxy2.meal);

// tarck 函数接收两个参数 target, key, 将target 存储到targetMap中
//let targetMap = new WeakMap();

export function track(target, key) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  dep.add(activeEffect);
}
export function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => {
      effect();
    });
  }
}

export default {
  name: "DemoH6CompReactiveSub1",
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
