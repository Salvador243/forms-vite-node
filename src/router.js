import { createRouter, createWebHistory } from 'vue-router';
import formView from './views/formView.vue';
import dashboardView from './views/dashboardView.vue';

const routes = [
    { path: '/', component: formView },
    { path: '/dashboard', component: dashboardView },
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;