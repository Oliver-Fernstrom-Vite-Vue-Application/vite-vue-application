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

    <div class="row">
      <div
        v-for="product in productStore.products"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4 mb-4"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
<style scope>
.text-center {
  color: var(--text-color);
}
body {
  background-color: var(--bg-color-comp);
}
::v-deep(.custom-container) {
  background-color: red !important;
}
</style>
