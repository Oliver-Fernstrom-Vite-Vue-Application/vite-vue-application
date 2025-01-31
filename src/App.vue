<script setup>
import { useProductStore } from "./stores/productStores.js";
import { onMounted } from "vue";

// Import store
const productStore = useProductStore();

// Run loadProducts() from store when the component is mounting
onMounted(() => {
  productStore.loadProducts();
});
</script>

<template>
  <div>
    <h1>Products</h1>
    <p v-if="productStore.loading">Loading products...</p>
    <p v-if="productStore.error" class="error">{{ productStore.error }}</p>
    <ul v-else>
      <li v-for="product in productStore.products" :key="product.title">
        <span class="product-title">{{ product.title }}</span>
        -
        <span class="product-price">{{ product.price }} </span>
        <p class="description">{{ product.description }}</p>
      </li>
    </ul>
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
