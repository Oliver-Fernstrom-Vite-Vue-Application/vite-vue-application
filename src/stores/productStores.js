// import pinia in order to create a store
import { defineStore } from "pinia";
// Import function fetchData - gives us access to API data
import { fetchData } from "../services/api.js";

// Create a store with the name productStore
export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [], // Array for products
    loading: false, // Shows if API is loading
    error: null, // In order to store possible errors
  }),
  actions: {
    async loadProducts() {
      this.loading = true; // Stating API call has begun.
      this.error = null;
      try {
        this.products = await fetchData(); // Try fetch data from API, await for an array of products
      } catch (error) {
        this.error = error.message; // Saves errormsg to state
        console.error("Error loading products:", error.message);
      } finally {
        this.loading = false; // Updates loading status
      }
    },
  },
  // popularProducts is a getter that returns the 5 products with the highest rating
  getters: {
    // state refers to the state of the store
    popularProducts: (state) => {
      // if there are no prodcuts, return an empty array
      if (!state.products.length) return [];
      // Returns a copy of the products array
      // Sorted by rating in descending order, sliced at 5
      return [...state.products]
        .sort((a, b) => b.rating.rate - a.rating.rate) // Sorts the array by rating in descending order
        .slice(0, 6); // Slices the array at index 6
    },
  },
});
