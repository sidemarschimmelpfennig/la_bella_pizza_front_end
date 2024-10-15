import '@/assets/scss/_main.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router';
createApp(App).use(router).mount('#app');
