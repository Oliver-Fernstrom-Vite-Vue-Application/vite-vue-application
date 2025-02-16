<script setup></script>

<template>
  <footer class="footer text-center py-3">
    <div class="container">
      <p class="mb-0">&copy; 2025 Shady Stuff. All rights reserved.</p>
      <div class="social-icons mt-2">
        <a href="#" class="me-3"><i class="bi bi-facebook"></i></a>
        <a href="#" class="me-3"><i class="bi bi-twitter"></i></a>
        <a href="#" class="me-3"><i class="bi bi-instagram"></i></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
}

.social-icons a {
  color: white;
  font-size: 2rem;
  padding: 3px;
  transition: color 0.3s ease-in-out;
}

.social-icons a:hover {
  color: var(--accent-color);
}
</style>
