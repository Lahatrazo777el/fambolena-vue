<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="auth-container">
    <main class="auth-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f7f0;
}
</style>
