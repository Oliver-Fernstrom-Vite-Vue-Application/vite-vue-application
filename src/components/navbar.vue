<script setup>
import { ref } from "vue";
const navOpen = ref(false);
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">SHADY STUFF</b-navbar-brand>

      <!--  Hamburger toggle button -->
      <b-navbar-toggle
        target="nav-collapse"
        class="hamburger"
        @click="navOpen = !navOpen"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav v-model="navOpen">
        <b-navbar-nav class="ms-auto">
          <!--  Links to Home, Contact, productDetails -->
          <router-link to="/" class="me-3">Home</router-link>
          <router-link to="/contact">Contact</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">ENG</b-dropdown-item>
            <b-dropdown-item href="#">SWE</b-dropdown-item>
            <b-dropdown-item href="#">GER</b-dropdown-item>
            <b-dropdown-item href="#">ESP</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.hamburger {
  color: white !important;
  background-color: rgba(8, 249, 116, 0.888);
}
</style>
