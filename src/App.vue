<script setup>
import { useProductStore } from "./stores/productStores.js";
import { onMounted } from "vue";
import Navbar from "./components/navbar.vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";

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
  <Footer />
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
