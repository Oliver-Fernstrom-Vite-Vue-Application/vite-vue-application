<script setup>
// Importing Computed, Ref, reactive and defineProps
import { computed, ref, defineProps } from "vue";

// Defining product props
const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator: (value) => {
      if (!value.title || !value.price) {
        console.error("Product must have title and price");
        return false; // false if product lacks title and price
      }
      return true; // true if product has title and price
    },
  },
});
// Keeping track of product quantity
const quantity = ref(0);
</script>

<template>
  <router-link :to="`/product/${product.id}`" class="card-link">
    <!-- if product is avaible, create card with product details -->
    <div v-if="product" class="card h-100 custom-card">
      <img
        class="card-img-top"
        :src="product.images?.[0] || product.thumbnail"
        :alt="product.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <!--  <p class="card-text text-center">{{ product.description }}</p> -->
        <p class="card-text accent-text">${{ product.price }}</p>
        <p v-if="quantity > 0" class="str-text">
          Added to cart: <span class="accent-text"> {{ quantity }}</span>
        </p>
        <p v-if="quantity > 0" class="str-text">
          Product Total: <span class="accent-text"> {{ cost }} $</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card-link {
  text-decoration: none;
  color: var(--text-color);
}
.custom-card {
  background-color: var(--bg-color) !important;
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
  border: solid 2px black;
  color: #000 !important;
  font-weight: bold;
}
.accent-text {
  font-weight: bold;
  color: var(--accent-color);
}
</style>
