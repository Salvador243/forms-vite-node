import { createRouter, createWebHistory } from 'vue-router';
import formView from './views/formView.vue';
import dashboardView from './views/dashboardView.vue';
import loginView from './views/loginView.vue';

import { useSession } from './store/useSession';

const routes = [
    { path: '/', component: formView },
    { path: '/dashboard', component: dashboardView, meta: { requiresAuth: true } },
    { path: '/login', component: loginView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const session = useSession();
    const isActive = session.active;

    if (to.meta.requiresAuth) {
        if (isActive) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router;