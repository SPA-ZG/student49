<template>
  <div class="home-container">
    <h1>Welcome to Task Scheduler!</h1>
    <p>If you're looking to organize your day, you're in the right place.</p>

    <div class="task-overview my-4">
      <h2>Your Tasks {{ taskCount }}</h2>
      <task-card
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @deleteTask="deleteTask"
      ></task-card>
    </div>

    <div class="navigation-buttons mt-4">
      <router-link to="/tasks" class="btn btn-primary me-2">View All Tasks</router-link>
      <router-link to="/calendar" class="btn btn-secondary">View Calendar</router-link>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted} from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import TaskCard from '@/components/TaskCard.vue';

const taskStore = useTaskStore();
const tasks = taskStore.tasks;

const taskCount = computed(() => tasks.length);

const deleteTask = async (taskId) => {
  await taskStore.deleteTask(taskId);
  await taskStore.fetchTasks();
};

onMounted(async () => {
  if (!tasks.length) {
    await taskStore.fetchTasks();
  }
});
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: var(--color-light);
  color: var(--color-primary);
}

.task-overview h2 {
  margin-bottom: 15px;
  color: var(--color-primary);
}

</style>
