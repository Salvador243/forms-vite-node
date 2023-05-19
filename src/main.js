import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import './style.scss';

const app = createApp(App);
app.use(router).mount('#app');