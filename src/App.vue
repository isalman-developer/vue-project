<script setup>
import { RouterView } from "vue-router";
import NavBar from './components/common/NavBar.vue';
</script>

<template>
  <div class="container">
    <NavBar />

    <div class="container-fluid">
      <RouterView />
    </div>
    
  </div>
</template>

<style scoped>
.container {
  max-width: 100vw;
  margin: 0 auto;
}

.container-fluid {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
