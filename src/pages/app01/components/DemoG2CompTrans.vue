<!--declares a demo component, No. is DemoG2
  this chapter is about transitions by "<transition>".
-->
<template>
  <fieldset>
    <legend align="left">DemoG2 transitions</legend>
    <fieldset>
      <legend align="left">G2-1 transitions</legend>
      <button @click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </fieldset>
    <fieldset>
      <legend align="left">G2-2 css transitions</legend>
      <button @click="show = !show">
        Toggle render by css
      </button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </fieldset>
    <fieldset>
      <legend align="left">G2-3 css animations</legend>
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam
          fermentum id. Pellentesque habitant morbi tristique senectus et netus.
        </p>
      </transition>
    </fieldset>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css" rel="stylesheet"
      type="text/css" />
    <fieldset>
      <legend align="left">G2-4 custom class name for transitions</legend>
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="custom-classes-transition" enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight">
        <p v-if="show">hello</p>
      </transition>
    </fieldset>
    <fieldset>
      <legend align="left">G2-5 javaScript transitions by "GreenSock"</legend>
      <button @click="show = !show">
        Toggle
      </button>
      <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
        <p v-if="show">
          Demo
        </p>
      </transition>
    </fieldset>
    <fieldset>
      <legend align="left">G2-5 javaScript transitions by "GreenSock"</legend>
      <span>
        <transition>
          <table v-if="show">
            <tr>
              <td>AAAA</td>
              <td>BBBB</td>
              <td>CCCC</td>
            </tr>
          </table>

          <p v-else>Sorry, no items found.</p>
        </transition>
      </span>
      <div>
        <transition>
          <button :key="docState">
            {{ buttonMessage }}
          </button>
        </transition>
      </div>
    </fieldset>
    <fieldset>
      <legend align="left">G2-6 transition among multiple components</legend>
      <input v-model="view" type="radio" value="v-a" id="a" /><label for="a">A</label>
      <input v-model="view" type="radio" value="v-b" id="b" /><label for="b">B</label>
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component>
      </transition>
    </fieldset>
  </fieldset>
</template>

<script>
import { gsap } from "gsap"; // 导入gsap到vue项目

export default {
  name: "DemoG2CompTrans",
  data() {
    return {
      show: true,
      docState: "edited",
      view: "v-a",
    };
  },
  components: {
    "v-a": {
      template: "<div>Component A</div>",
    },
    "v-b": {
      template: "<div>Component B</div>",
    },
  },
  computed: {
    buttonMessage() {
      switch (this.docState) {
        case "saved":
          return "Edit";
        case "edited":
          return "Save";
        case "editing":
          return "Cancel";
      }
      return "UNKNOWN";
    },
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        scaleX: 0.8,
        scaleY: 1.2,
      });
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        scaleX: 1.5,
        scaleY: 0.7,
        opacity: 1,
        x: 150,
        ease: "elastic.inOut(2.5, 1)",
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: "elastic.inOut(2.5, 1)",
      });
      gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
