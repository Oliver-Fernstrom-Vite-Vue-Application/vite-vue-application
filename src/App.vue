<script setup>
import { useProductStore } from "./stores/productStores.js";
import { onMounted } from "vue";
import ProductList from "./components/ProductList.vue";
import Navbar from "./components/navbar.vue";
import { RouterView } from "vue-router";

const productStore = useProductStore(); // Import store

// Run loadProducts() from store when the component is mounting
onMounted(() => {
  productStore.loadProducts();
});
</script>

<template>
  <Navbar />
  <div>
    <h1 class="text-2xl font-bold mb-4">Produkter</h1>
    <ProductList />
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
li {
  list-style: none;
}
.product-title {
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
