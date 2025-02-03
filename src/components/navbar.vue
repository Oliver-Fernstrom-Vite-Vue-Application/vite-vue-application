<script setup>
import { ref } from "vue";

// Reactive state for mobile menu toggle
const isMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-gray-800 text-white">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <!-- Logo -->
      <a href="#" class="text-2xl font-bold"> MyBrand </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-6">
        <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">Shop</a>
        <a href="#" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Contact</a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden focus:outline-none"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-700">
      <div class="flex flex-col space-y-2 px-4 py-3">
        <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">Shop</a>
        <a href="#" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Add any additional styling if needed */
</style>
