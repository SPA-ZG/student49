import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TaskListView from '../views/TaskListView.vue';
import CalendarView from '../views/CalendarView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import { useAuthStore } from '@/stores/auth';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: TaskListView
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: CalendarView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/:catchAll(.*)*',
        name: 'NotFound',
        component: NotFoundPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.isAuthenticated) {
        auth.setLandingUrl(to.fullPath);
        return next('/login');
    }

    next();
});

export default router;