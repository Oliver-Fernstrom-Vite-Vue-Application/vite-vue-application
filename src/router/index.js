// import the createRouter function and createWebHistory function from the vue-router package
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import productDetails from "../views/ProductDetails.vue";

// Define the routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  // Dynamic route with a parameter
  {
    path: "/product/:id",
    name: "productDetails",
    component: productDetails,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router instance
export default router;
