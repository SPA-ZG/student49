import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import TaskCard from './components/TaskCard.vue';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('task-card', TaskCard);
app.mount('#app');