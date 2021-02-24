<template>
  <img alt="Vue logo" src="../../assets/logo.png" />
  <DemoA1Counter counter="abc"></DemoA1Counter>
  <DemoA2CounterTimerr :counter="0" :interval="2000" intervalUnit="ms"></DemoA2CounterTimerr>
  <DemoA3BindAttribute></DemoA3BindAttribute>
  <DemoA3_1VModel DemoA3_1VModel></DemoA3_1VModel>
  <DemoA4VOn></DemoA4VOn>
  <DemoA4VOnAdv></DemoA4VOnAdv>
  <DemoA5_1VIf></DemoA5_1VIf>
  <DemoA5_2VIfAdv></DemoA5_2VIfAdv>
  <DemoA6_1VFor></DemoA6_1VFor>
  <DemoA6_2VFor></DemoA6_2VFor>
  <DemoA6_3VForTodo></DemoA6_3VForTodo>
  <demoA7DynamicParams></demoA7DynamicParams>
  <DemoA8_Loadsh></DemoA8_Loadsh>
  <DemoA9ComputedProperties></DemoA9ComputedProperties>
  <DemoA9Watcher></DemoA9Watcher>
  <DemoB1ClassStyle></DemoB1ClassStyle>
  <DemoC1FormElements></DemoC1FormElements>
  <demo-d1-comp></demo-d1-comp>
  <DemoE1Comp></DemoE1Comp>
  <DemoF1Comp></DemoF1Comp>
  <DemoG1CompTranAnim></DemoG1CompTranAnim>
  <DemoG2CompTrans></DemoG2CompTrans>
  <DemoG3CompListTrans></DemoG3CompListTrans>
  <DemoH1CompMixin></DemoH1CompMixin>
  <DemoH2CompCusDirec></DemoH2CompCusDirec>
  <demo-h3-comp-teleport></demo-h3-comp-teleport>
  <DemoH4CompRenderFunctions></DemoH4CompRenderFunctions>
  <DemoH6CompReactive></DemoH6CompReactive>
  <DemoH8Router></DemoH8Router>

</template>

<script>
import DemoA1Counter from "./components/DemoA1Counter.vue";
import DemoA2CounterTime from "./components/DemoA2CounterTimer";
import DemoA3BindAttribute from "./components/DemoA3VBind";
import DemoA3_1VModel from "./components/DemoA3_1VModel";
import DemoA4VOn from "./components/DemoA4VOn";
import DemoA4VOnAdv from "./components/DemoA4VOnAdv";
import DemoA5_1VIf from "./components/DemoA5_1VIf";
import DemoA6_1VFor from "./components/DemoA6_VFor";
import demoA7DynamicParams from "./components/DemoA7DynamicParam";
import DemoA8_Loadsh from "./components/DemoA8_Loadsh";
import DemoA9ComputedProperties from "./components/DemoA9ComputedProperties";
import DemoA9Watcher from "./components/DemoA9Watcher";
import DemoB1ClassStyle from "./components/DemoB1ClassStyle";
import DemoA5_2VIfAdv from "./components/DemoA5_2VIfAdv";
import DemoA6_2VFor from "./components/DemoA6_2VFor";
import DemoA6_3VForTodo from "./components/DemoA6_3VForTodo";
import DemoC1FormElements from "./components/DemoC1FormElements";
import DemoD1Comp from "./components/DemoD1Comp";
import DemoE1Comp from "./components/DemoE1Comp";
import DemoF1Comp from "./components/DemoF1Comp";
import DemoG1CompTranAnim from "./components/DemoG1CompTranAnim";
import DemoG2CompTrans from "./components/DemoG2CompTrans";
import DemoG3CompListTrans from "./components/DemoG3CompListTrans";
import DemoH1CompMixin from "./components/DemoH1CompMixin";
import DemoH2CompCusDirec from "./components/DemoH2CompCusDirec";
import DemoH3CompTeleport from "./components/DemoH3CompTeleport";
import DemoH4CompRenderFunctions from "./components/DemoH4CompRenderFunctions";
import DemoH6CompReactive from "./components/DemoH6CompReactive";
import DemoH8Router from "./components/DemoH8CompRouter";
// const DemoH8Router = () => import("./components/DemoH8CompRouter"); //dynamic imports

export default {
  name: "RootApp",
  components: {
    DemoA1Counter: DemoA1Counter,
    DemoA2CounterTimerr: DemoA2CounterTime,
    DemoA3BindAttribute: DemoA3BindAttribute,
    DemoA3_1VModel: DemoA3_1VModel,
    DemoA4VOn: DemoA4VOn,
    DemoA4VOnAdv: DemoA4VOnAdv,
    DemoA5_1VIf: DemoA5_1VIf,
    DemoA5_2VIfAdv: DemoA5_2VIfAdv,
    DemoA6_1VFor: DemoA6_1VFor,
    DemoA6_2VFor: DemoA6_2VFor,
    DemoA6_3VForTodo: DemoA6_3VForTodo,
    demoA7DynamicParams: demoA7DynamicParams,
    DemoA8_Loadsh: DemoA8_Loadsh,
    DemoA9ComputedProperties: DemoA9ComputedProperties,
    DemoA9Watcher: DemoA9Watcher,
    DemoB1ClassStyle: DemoB1ClassStyle,
    DemoC1FormElements: DemoC1FormElements,
    DemoD1Comp: DemoD1Comp,
    DemoE1Comp: DemoE1Comp,
    DemoF1Comp: DemoF1Comp,
    DemoG1CompTranAnim,
    DemoG2CompTrans,
    DemoG3CompListTrans,
    DemoH1CompMixin,
    DemoH2CompCusDirec,
    DemoH3CompTeleport,
    DemoH4CompRenderFunctions: DemoH4CompRenderFunctions,
    DemoH6CompReactive,
    DemoH8Router: DemoH8Router,
  },
  data() {
    return {
      rootVariable1: "刘锐",
    };
  },
};
// export default {
//   name: 'App',smelled campfire
//   // components: {
//   //   HelloWorld
//   // }
// }
</script>

<style>
#rootApp {
  font-family: monospace, sans-serif, Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2d2dfe;

  margin-top: 5px;
  margin-left: 5px;
  padding-top: 5px;
  padding-left: 5px;
}
.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}

.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "nav content"
    "nav helper";
}

h2 {
  grid-area: header;
}

.us__nav {
  grid-area: nav;
  border: 1px dotted;
  margin-right: 0.75rem;
  padding: 0.3rem;
}
.us__content {
  grid-area: content;
}
.us__content--helper {
  grid-area: helper;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

li:not(:last-of-type) {
  margin-right: 1rem;
}
</style>
