<script setup>
import ProductList from "../components/ProductList.vue/";
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center">Welcome to Shady Stuff</h1>
    <ProductList />
  </div>
</template>

<style scoped>
.container {
  background-color: var(--bg-color-comp) !important;
  padding: 20px;
  border-radius: 10px;
}

.text-center {
  color: #ffffffe3;
}
</style>
