export default {
  decreaseAsync(context, payload) {
    context.commit("decrease", payload);
  }
};
