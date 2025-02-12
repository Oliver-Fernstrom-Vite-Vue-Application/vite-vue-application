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
  <div id="nav"></div>
  <RouterView />
  <div v-if="$route.path !== '/contact'">
    <ProductList />
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
