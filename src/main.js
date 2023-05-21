import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import { createPinia } from 'pinia';
import './style.scss';

const app = createApp(App);
app.use(router).use(createPinia()).mount('#app');
