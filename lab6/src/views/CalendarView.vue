<template>
  <div class="calendar-container">
    <h1 class="text-center mb-4">Task Calendar</h1>

    <div class="calendar-view">
      <p class="text-center">Calendar view coming soon...</p>
    </div>

    <div class="upcoming-tasks mt-5">
      <h2>Upcoming Tasks</h2>
      <ul class="list-group">
        <li
            v-for="task in upcomingTasks"
            :key="task.id"
            class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ task.name }}
          <span class="badge bg-primary rounded-pill">{{ task.dueDate }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.calendar-container {
  padding: 20px;
  background-color: var(--color-light);
  color: var(--color-primary);
}

.calendar-view {
}

.upcoming-tasks h2 {
  margin-bottom: 15px;
  color: var(--color-primary);
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-light);
  border-radius: var(--border-radius);
}
</style>