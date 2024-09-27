<template>
  <div class="task-list-container">
    <h1 class="text-center mb-4">My Tasks</h1>

    <div class="text-center mt-4">
      <input type="text" v-model="newTask.name" placeholder="Task Name">
      <input type="text" v-model="newTask.description" placeholder="Description">
      <input type="date" v-model="newTask.dueDate">
      <input type="text" v-model="newTask.priority" placeholder="Priority">
      <button @click="submitNewTask" class="btn btn-success">Add New Task</button>
    </div>

    <div class="task-list">
      <task-card
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @deleteTask="deleteTask"
      ></task-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import TaskCard from '@/components/TaskCard.vue';

const taskStore = useTaskStore();
const tasks = ref([]);
const newTask = ref({ name: '', description: '', dueDate: '', priority: '' });

const fetchTasks = async () => {
  await taskStore.fetchTasks();
  tasks.value = taskStore.allTasks;
};

const submitNewTask = async () => {
  if(newTask.value.name && newTask.value.description && newTask.value.dueDate && newTask.value.priority) {
    await taskStore.addTask(newTask.value);
    newTask.value = { name: '', description: '', dueDate: '', priority: '' }; // Reset form
    await fetchTasks();
  }
};

const deleteTask = async (taskId) => {
  await taskStore.deleteTask(taskId);
  await fetchTasks();
};

onMounted(fetchTasks);
</script>

<style scoped>
.task-list-container {
  padding: 20px;
  background-color: var(--color-primary);
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h1 {
  color: var(--color-dark);
  text-align: center;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  transition: var(--transition);

  &.btn-success {
    background-color: var(--color-success);
    color: white;
  }
}

.text-center {
  text-align: center;
}

</style>
