<template>
  <div class="login-container d-flex justify-content-center align-items-center">
    <div class="login-card p-4 border rounded">
      <h2 class="text-center mb-4">Task Scheduler Login</h2>
      <form @submit.prevent="performLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter username"
              v-model="username"
              required
          />
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const username = ref('');

const performLogin = () => {
  authStore.login(username.value);
  router.push({ name: 'home' });
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
}

.login-card {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid var(--color-dark);
  border-radius: var(--border-radius);
  background-color: var(--color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-label {
  color: var(--color-primary);
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-primary);
  background-color: var(--color-light);
  border: 1px solid var(--color-dark);
  border-radius: var(--border-radius);
  transition: var(--transition);

  &:focus {
    border-color: var(--color-primary);
    outline: none;
  }
}

.btn {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: var(--border-radius);
  transition: var(--transition);

  &.btn-primary {
    background-color: var(--color-primary);
    color: white;
  }
}
</style>
