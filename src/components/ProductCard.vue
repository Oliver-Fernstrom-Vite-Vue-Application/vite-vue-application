<template>
  <div v-if="product" class="card h-100 custom-card">
    <img
      class="card-img-top"
      :src="product.images?.[0] || product.thumbnail"
      :alt="product.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <!--  <p class="card-text text-center">{{ product.description }}</p> -->
      <p class="card-text font-weight-bold">${{ product.price }}</p>
      <p v-if="quantity > 0" class="str-text">Added to cart: {{ quantity }}</p>
      <p v-if="quantity > 0" class="str-text">Product Total: {{ cost }} $</p>
      <b-button
        @click="increaseQuantity"
        variant="outline-primary"
        size="m"
        class="custom-button mx-2"
        >+</b-button
      >
      <b-button
        @click="decreaseQuantity"
        variant="outline-primary"
        size="m"
        class="custom-button mx-2"
        >-</b-button
      >
    </div>
  </div>
</template>

<script setup>
import { computed, ref, defineProps } from "vue"; // Importing Computed, Ref

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const quantity = ref(0);

const cost = computed(() => {
  return (quantity.value * props.product.price).toFixed(2);
});

const increaseQuantity = () => quantity.value++;
const decreaseQuantity = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};
</script>

<style scoped>
.custom-card {
  background-color: var(--bg-color-comp) !important;
  color: var(--text-color);
}
li {
  list-style: none;
}
.product-title {
  font-size: 1.3rem;
  font-weight: bold;
}
.str-text {
  font-weight: 600;
}
.custom-button {
  background-color: var(--accent-color) !important;
  border-color: var(--accent-color) !important;
  color: var(--text-color) !important;
  font-weight: bold;
}
</style>
