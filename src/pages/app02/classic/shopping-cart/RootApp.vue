<template>
  <div id="app02">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList />
    <hr>
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
export default {
  name: "RootApp02",
  components: { ProductList, ShoppingCart },
};
</script>


<style>
#app02 {
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
  /*display: flex;*/
  list-style: none;
  padding: 0;
  margin: 0;
}

li:not(:last-of-type) {
  margin-right: 1rem;
}
</style>
