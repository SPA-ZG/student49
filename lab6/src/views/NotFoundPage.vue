<template>
  <div class="not-found-container text-center">
    <h1 class="display-3">Oops! Page Not Found</h1>
    <p>The page you're looking for doesn't exist. It might have been moved or deleted.</p>
    <router-link to="/" class="btn btn-primary mt-3">Go Back Home</router-link>
    <br />
    <img src="@/assets/404.jpg" alt="Page Not Found" class="mt-4" style="max-width: 100%; height: auto;">
  </div>
</template>

<style scoped>
.not-found-container {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
