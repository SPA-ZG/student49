<template>
  <div class="task-card">
    <h5 class="task-title">{{ task.name }}</h5>
    <p class="task-description">{{ task.description }}</p>
    <div class="task-details">
      <span class="task-deadline">Due: {{ task.dueDate }}</span>
      <span class="task-priority">Priority: {{ task.priority }}</span>
    </div>
    <div class="task-actions">
      <button class="btn btn-danger btn-sm" @click="emitDeleteTask">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitDeleteTask() {
      this.$emit('deleteTask', this.task.id);
    },
  }
};
</script>

<style scoped>
.task-card {
  background-color: var(--color-light);
  border: 1px solid var(--color-dark);
  padding: 10px;
  border-radius: var(--border-radius);
  margin-bottom: 10px;
}

.task-title {
  color: var(--color-primary);
  font-weight: bold;
}

.task-description {
  font-size: 0.9em;
  margin-bottom: 10px;
  color: var(--color-secondary);
}

.task-details {
  font-size: 0.8em;
  color: var(--color-secondary);
}

.task-actions {
  text-align: right;
}
</style>
