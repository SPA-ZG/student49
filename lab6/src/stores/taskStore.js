import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
    }),
    getters: {
        allTasks: (state) => state.tasks,
        getTaskById: (state) => (id) => state.tasks.find(task => task.id === id),
    },
    actions: {
        async fetchTasks() {
            if (this.tasks.length === 0) {
                console.log("Fetching tasks...");
                try {
                    const response = await fetch("http://127.0.0.1:8888/tasks");
                    if (response.ok) {
                        const tasks = await response.json();
                        this.tasks = tasks;
                    } else {
                        throw new Error("HTTP-Error: " + response.status);
                    }
                } catch (error) {
                    console.error("Error fetching tasks:", error);
                }
            }
        },
        async addTask(newTask) {
            try {
                const response = await fetch("http://127.0.0.1:8888/tasks", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newTask)
                });
                if (!response.ok) {
                    throw new Error("HTTP-Error: " + response.status);
                }
                const addedTask = await response.json();
                this.tasks.push(addedTask);
            } catch (error) {
                console.error("Error adding task:", error);
            }
        },
        async deleteTask(taskId) {
            try {
                const response = await fetch(`http://127.0.0.1:8888/tasks/${taskId}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error("HTTP-Error: " + response.status);
                }
                this.tasks = this.tasks.filter(task => task.id !== taskId);
            } catch (error) {
                console.error("Error deleting task:", error);
            }
        }
    },
});
