<template>
  <Navbar />
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <!-- Content goes here -->
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navigation/Navbar.vue';
</script>