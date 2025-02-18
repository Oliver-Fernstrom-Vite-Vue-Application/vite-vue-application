<script setup>
import { useProductStore } from "../stores/productStores";
import { useRoute } from "vue-router";
import { computed, ref, onMounted } from "vue";

const route = useRoute();
const productStore = useProductStore();

// Mounting the product store
onMounted(async () => {
  if (productStore.products.length === 0) {
    await productStore.loadProducts();
  }
});

// Find - looking for the first product that matches the id.
// If product is not found or not a number, return null
const product = computed(
  () =>
    productStore.products.find((p) => p.id == Number(route.params.id)) || null
);

// Hantera antal produkter
const quantity = ref(0);

// Calculating cost of product. If quantity or price changes, cost will be recalculated
const cost = computed(() => {
  return (quantity.value * product.value?.price || 0).toFixed(2);
});

// Function to increase & decrease quantity
const increaseQuantity = () => quantity.value++;
const decreaseQuantity = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};
// Enlarged image popup of the product
const isImagePopup = ref(false);
const closePopup = () => {
  isImagePopup.value = false;
};
</script>

<template>
  <!-- Enlarged product image popup -->
  <div v-if="product" class="product-details-container">
    <div v-if="isImagePopup" class="lightbox" @click="closePopup">
      <img
        class="lightbox-img"
        :src="product.images?.[0] || product.thumbnail"
        :alt="product.title"
      />
    </div>

    <!-- Default card -->
    <div class="card product-details-card">
      <img
        class="card-img-top product-img-large"
        :src="product.images?.[0] || product.thumbnail"
        :alt="product.title"
        @click="isImagePopup = true"
        aria-label="Click to enlarge image"
      />
      <p class="click-to-enlarge">
        <i class="bi bi-arrows-fullscreen"></i> Click the image to enlarge
      </p>

      <div class="card-body">
        <h1 class="card-title">{{ product.title }}</h1>
        <p class="card-text accent-text price">
          <i class="bi bi-currency-dollar"> </i>{{ product.price }}
        </p>

        <div class="quantity-controls">
          <b-button
            @click="increaseQuantity"
            variant="outline-primary"
            size="m"
            class="custom-button mx-2"
            ><i class="bi bi-plus-lg"></i>
          </b-button>
          <b-button
            @click="decreaseQuantity"
            variant="outline-primary"
            size="m"
            class="custom-button mx-2"
            ><i class="bi bi-dash-lg"></i
          ></b-button>
        </div>

        <p v-if="quantity > 0" class="str-text">
          <i class="bi bi-bag-check cstm-icn"></i>
          Added to cart:
          <span class="accent-text"> {{ quantity }}</span>
        </p>
        <p v-if="quantity > 0" class="str-text">
          <i class="bi bi-wallet2 cstm-icn"></i> Product Total:
          <span class="accent-text">
            {{ cost }} <i class="bi bi-currency-dollar"></i
          ></span>
        </p>

        <!-- Product details collapsing button-->
        <button
          class="btn btn-dark readmore-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + product.id"
        >
          Product details <br /><i class="bi-chevron-down"></i>
        </button>
        <div class="collapse mt-2" :id="'collapse' + product.id">
          <p class="card-text">{{ product.description }}</p>
          <span>Product Status:</span>
          <p>
            <i class="bi bi-check-lg cstm-icn"></i>
            {{ product.availabilityStatus }}
          </p>
          <p>
            <i class="bi bi-star-fill yellow-icon"> </i>
            Rating:
            <span>{{ product.rating }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p class="error">Product not found.</p>
  </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .product-details-card {
    width: 70% !important;
  }
}
/* Enlarged image (popup) */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-img {
  max-width: 40%;
  max-height: auto;
}
.click-to-enlarge {
  font-size: 0.9rem;
  color: #bbb;
  text-align: center;
  margin-top: 5px;
  cursor: pointer;
}
.product-details-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.product-details-card {
  background-color: var(--bg-color-comp) !important;
  color: var(--text-color);
  width: 100%;
}
.product-img-large {
  cursor: pointer;
  width: 100%;
  height: 300px;
}
li {
  list-style: none;
}
.product-title {
  font-size: 1.3rem;
  font-weight: bold;
}
.card-text {
  font-size: 1.2rem;
  padding: 0 20px;
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
.product-details-card:hover {
  transform: none !important;
  transition: none !important;
}
.readmore-button {
  font-size: 1.3rem;
  margin: 15px;
}
.str-text {
  margin: 15px;
}
/* Cart & Wallet icons */
.cstm-icn {
  font-size: 1.5rem;
}
/* Star rating icon */
.yellow-icon {
  color: #f0d800;
}
</style>
