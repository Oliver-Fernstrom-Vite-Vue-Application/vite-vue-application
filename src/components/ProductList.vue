<script setup>
import { useProductStore } from "../stores/productStores";
import { onMounted } from "vue";
import ProductCard from "./ProductCard.vue"; // ProductCard = child component

const productStore = useProductStore();

onMounted(() => {
  productStore.loadProducts(); // load products from the API
});
</script>

<template>
  <div class="container mt-4 custom-container">
    <h2 class="mb-4 text-center">Discover products</h2>

    <!-- Loop through the products array from productStore and render ProductCard component for each product -->
    <div class="row">
      <div
        v-for="product in productStore.products"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4 mb-4"
      >
        <!-- Rendering the ProductCard component with product prop set to product -->
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-container {
  background-color: var(--bg-color-prodlist) !important;
}
.text-center {
  color: var(--text-color);
}
body {
  background-color: var(--bg-color) !important;
}
</style>
