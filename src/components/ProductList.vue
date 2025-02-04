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
  <div class="flex flex-wrap gap-4">
    <ProductCard
      v-for="product in productStore.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
