// this file defines mutations in "MUTATIONS_TYPE" mode. it is imported by store/index.js as its a module.

// declares a constant to save the method name in "mutations".
export const MUTATIONS_TYPE = {
  INCREASE: "increase",
  DECREASE: "decrease"
};

export default {
  // 让num累加
  // payload是一个形参，如果组件在commit时，有传这个参数过来，就存在，如果没有传过来，就是undefined
  [MUTATIONS_TYPE.INCREASE](state, payload) {
    state.num += payload ? payload : 1;
  },
  // 让num累减
  [MUTATIONS_TYPE.DECREASE](state) {
    state.num--;
  }
};
