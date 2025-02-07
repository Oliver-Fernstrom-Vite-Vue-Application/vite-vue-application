<script setup>
defineProps(["product"]); // Tar emot en produkt som prop
</script>

<template>
  <div v-if="product" class="card h-100 bg-light">
    <img
      class="card-img-top"
      :src="product.images?.[0] || product.thumbnail"
      :alt="product.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <!--  <p class="card-text text-center">{{ product.description }}</p> -->
      <p class="card-text font-weight-bold">${{ product.price }}</p>
      <a href="#" class="btn btn-primary btn-lg">Add to cart</a>
    </div>
  </div>
</template>
