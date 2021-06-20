import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

// composables
import { registerRouter } from '@/composables/router';
import { registerComponents } from '@/composables/globalComponents';

const app = createApp(App);
registerRouter(app);
registerComponents(app);
app.mount('#app');
