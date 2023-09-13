<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1>Welcome to Vue</h1>
    <ol>
      <li>
        <RouterLink to="/array/shift">Array Shift</RouterLink>
      </li>
      <li>
        <RouterLink to="/slots">Slots Concept</RouterLink>
      </li>
      <li>
        <RouterLink to="/movies/api">keep-alive</RouterLink>
      </li>
      <li>
        <RouterLink to="/state-management">State Management</RouterLink>
      </li>
      <li>
        <RouterLink to="/props-drilling">Props Drilling / Provide and Inject</RouterLink>
      </li>
      <li>
        <RouterLink to="/composables">Composables</RouterLink>
      </li>
    </ol>
  </main>
</template>
