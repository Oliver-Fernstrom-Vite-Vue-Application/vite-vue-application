<script setup>
import { useProductStore } from "../stores/productStores";
import { onMounted } from "vue";
import ProductCard from "./ProductCard.vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.loadProducts(); // Ladda produkter från API vid sidans start
});
</script>

<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Produkter</h2>

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
