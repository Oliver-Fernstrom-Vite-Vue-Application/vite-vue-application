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
});
