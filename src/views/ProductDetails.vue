<script setup>
import { useProductStore } from "../stores/productStores";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";

const route = useRoute();
const productStore = useProductStore();

onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.loadProducts();
  }
});

const product = computed(() =>
  productStore.products.find((p) => p.id == route.params.id)
);
</script>

<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" :alt="product.title" />
    <p>{{ product.description }}</p>
    <p><strong>Price:</strong> $ {{ product.price }}</p>
    <p>Product-ID: {{}}</p>
  </div>

  <div v-else>
    <p class="error">Product not found.</p>
  </div>
</template>
