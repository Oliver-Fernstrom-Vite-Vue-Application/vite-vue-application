<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from "vue";

// Reactive variables. Used to toggle the navbar and track the y scroll position
const navOpen = ref(false);
const scrollY = ref(0);

// function to update the scrollY value
const updateScroll = () => {
  scrollY.value = window.scrollY;
};
watch(scrollY, (newValue) => {
  console.log("Scroll Position", newValue);
});

// Add event listener to the window object
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});

// remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});

// Change navbar class based on scroll position
const navbarClass = computed(() => {
  return scrollY.value > 50 ? "navbar-scrolled" : "navbar-default";
});
</script>

<template>
  <div>
    <b-navbar :class="navbarClass" toggleable="lg">
      <b-navbar-brand to="/" class="brand-name">SHADY STUFF</b-navbar-brand>

      <!--  Hamburger toggle button -->
      <b-navbar-toggle
        target="nav-collapse"
        class="hamburger"
        @click="navOpen = !navOpen"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav v-model="navOpen">
        <b-navbar-nav class="ms-auto">
          <!--  Links to Home, Contact, productDetails -->
          <router-link to="/" class="nav-link me-3" active-class="active-link"
            >Home</router-link
          >
          <router-link
            to="/contact"
            class="nav-link me-3"
            active-class="active-link"
            >Contact</router-link
          >
        </b-navbar-nav>

        <!--         <b-navbar-nav class="navbtext">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">ENG</b-dropdown-item>
            <b-dropdown-item href="#">SWE</b-dropdown-item>
            <b-dropdown-item href="#">GER</b-dropdown-item>
            <b-dropdown-item href="#">ESP</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right class="navbtext">
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
/* ::v-deep(.navbar-default) {
  background-color: var(--bg-color-comp) !important;
}
 */
.navbtext {
  color: var(--text-color) !important;
  font-size: 16px;
}

/* Styla dropdown-menyn */
.navbtext .dropdown-menu {
  background-color: var(--bg-color);
  border: 1px solid var(--accent-color);
}

.navbar-default,
.navbar-scrolled {
  background-color: var(--bg-navbar) !important;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

.navbar-default {
  padding: 20px 0;
}
.navbar-scrolled {
  padding: 8px 0;
  opacity: 0.7;
}
.navbar-scrolled:hover {
  padding: 20px 0;
  opacity: 1;
  transform: scaleY(1);
}
.hamburger {
  color: var(--text-color) !important;
  background-color: var(--accent-color);
}
.me-3 {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 300;
}
.me-3:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}
.brand-name:hover {
  opacity: 0.5;
}
.brand-name {
  color: var(--accent-color);
  font-size: 1.5rem;
  letter-spacing: 1.8px;
}

.active-link {
  color: var(--accent-color);
  text-shadow: 0px 0px 10px #28f897e3;
}
/* Using v-deep in scoped styles to override the default bootstrap styles */
::v-deep(.dropdown-toggle) {
  color: var(--text-color) !important;
}
::v-deep(.dropdown-item) {
  color: var(--text-color) !important;
}
::v-deep(.dropdown-menu) {
  background-color: var(--bg-color) !important;
  border-color: var(--accent-color) !important;
}
::v-deep(.dropdown-item:hover) {
  background-color: var(--bg-text-hov) !important;
}
</style>
