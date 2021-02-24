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
