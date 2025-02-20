import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/lara'; 
import App from './App.vue';
import './style.css';

const app = createApp(App); 

app.use(PrimeVue, {
    theme: {
        preset:Aura
    }
});

app.mount('#app');
