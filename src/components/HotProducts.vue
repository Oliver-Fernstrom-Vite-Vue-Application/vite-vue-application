<script setup>
import { useProductStore } from "../stores/productStores";
import { computed, onMounted } from "vue";

const productStore = useProductStore();
const hotProducts = computed(() => productStore.popularProducts);

// if the store is empty, load the products on mount before rendering component
onMounted(() => {
  if (!productStore.products.length) {
    console.log("🔄 Fetching products...");
    productStore.loadProducts();
  }
});

// Funktion för att dela upp produkter i grupper om 3
const chunkedHotProducts = computed(() => {
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < hotProducts.value.length; i += chunkSize) {
    chunks.push(hotProducts.value.slice(i, i + chunkSize));
  }
  return chunks;
});
</script>
<template>
  <section v-if="hotProducts.length">
    <h2 class="text-2xl font-bold mb-4 text-center">🔥 Popular Products</h2>

    <div
      id="multiProductCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(chunk, index) in chunkedHotProducts"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <div class="row">
            <div
              v-for="product in chunk"
              :key="product.id"
              class="col-12 col-md-4"
            >
              <div class="card custom-carousel">
                <img
                  class="card-img-top"
                  :src="product.images?.[0] || product.thumbnail"
                  :alt="product.title"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <h5 class="review-text">
                    "{{ product.reviews[2].comment }}"
                  </h5>
                  <p class="text-lg font-bold mt-1">${{ product.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#multiProductCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#multiProductCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.carousel-item {
  text-align: center;
  padding: 10px;
}
.card {
  margin: 10px;
}
.custom-carousel {
  background-color: var(--bg-color-component);
}
.custom-carousel .review-text {
  font-size: 1.5rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: var(--text-color);
}
</style>
