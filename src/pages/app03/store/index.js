import { createStore, createLogger } from "vuex";
import state from "../store/modules/states.js";
import getters from "../store/modules/getters.js";
import mutationsType from "./modules/mutations_type.js";
import actions from "../store/modules/actions.js";

//// this file is used to create a vuex4 store instance as the first step.

//the following are 2 vuex store modules imported, cart and products.
// import cart from "./modules/cart.js";
// import products from "./modules/products.js";

const debug = process.env.NODE_ENV !== "production";
const mutations = mutationsType;
//initialized a store for current RootApp.
export default createStore({
  //thd property "state" is equivalent to "data" in component, which is used to store global data specially.
  //state: { num: 0, numString: "A" },

  // the detailed state is defined in module store/states.js
  state,

  //the "getters" is equivalent to "computed" field in component, "getters" works on global, but "computed" is used only inside component.
  // getters: {
  //   getNum: function(state) {
  //     // return state.num++;
  //     return state.num;
  //   },
  //   getNumString: function(state) {
  //     // return state.num++;
  //     return state.numString;
  //   }
  // },

  // the specific getters definition is in module store/getters.js.
  getters,

  //"mutations" field is equivalent to "methods" propery in component, but they can not use asynchronous methods( for example, timers and axios)
  //in the "methods" inside components, can only use "this.$store.commit('mutation name',args) to call "mutatioins" defined here.
  // mutations: {
  //   //the second argument "payload" is a formal parameter(形参). If the component passes this parameter when committing, it exists. If it does not pass it, it is undefined.
  //   increase(state, payload) {
  //     state.num += payload ? payload : 1;
  //   },
  //   decrease: function(state, payload) {
  //     state.num--;
  //   }
  // },

  // declare "mutations" in "MUTATIONs_TYPE" way.
  mutations,

  //"actions" is specially used to handle a asynchronous action, The actual modification of the state value is in mutations still.
  // if do not need to call asynchronously, you call call mutatioins directly.
  // in "actions", can use "commit" to call various mutations defined by "mutations"
  // actions: {
  //   decreaseAsync(context, payload) {
  //     context.commit("decrease", payload);
  //   }
  // },
  //the detailed declaration is in module store/actions.js
  actions,

  strict: debug,
  plugins: debug ? [createLogger()] : [] //if in development log, create a logger, otherwise do nothing.
});
