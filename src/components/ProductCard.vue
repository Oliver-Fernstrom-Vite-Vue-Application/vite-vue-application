<script setup>
defineProps(["product"]); // Tar emot en produkt som prop
</script>

<template>
  <div
    v-if="product"
    class="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
  >
    <div
      class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
      :style="{ backgroundImage: `url(${product.image})` }"
      :alt="product.name"
    ></div>

    <div
      class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
    >
      <h3
        class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
      >
        {{ product.title }}
      </h3>

      <div
        class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700"
      >
        <span class="font-bold text-gray-800 dark:text-gray-200"
          >${{ product.price }}</span
        >
        <button
          class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
  <!--
  <div
    v-if="product"
    class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
  >
    <div class="px-4 py-2">
      <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">
        {{ product.title }}
      </h1>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {{ product.description }}
      </p>
    </div>

    <img
      class="object-cover w-full h-48 mt-2"
      :src="product.image"
      :alt="product.name"
    />

    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 class="text-lg font-bold text-white">${{ product.price }}</h1>
      <button
        class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
      >
        Add to cart
      </button>
    </div>
  </div> -->
</template>
