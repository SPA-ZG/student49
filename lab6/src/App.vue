<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
const store = useAuthStore();
</script>

<template>
  <div>
    <header class="d-flex justify-content-between bg-light border border-bottom border-dark p-3 align-items-baseline">
      <h1>Task Scheduler</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/tasks">My Tasks</RouterLink> |
        <RouterLink to="/calendar">Calendar</RouterLink>
      </nav>
      <div v-if="store.isAuthenticated" class="ml-5 h3">👤 {{ store.username }}</div>
      <RouterLink v-else to="/login">Login</RouterLink>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav a {
  font-size: 1.2rem;
  margin: 0 1rem;
}
</style>