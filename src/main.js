import { createApp } from 'vue';
import { store } from './store';

import App from './App.vue';
import 'tailwindcss/tailwind.css';

const app = createApp(App);

// Vuex Store
app.use(store);

// Import Icons
import chat from './components/icons/chat.vue';
import code from './components/icons/code.vue';
import menu from './components/icons/menu.vue';
app.component('icon-chat', chat);
app.component('icon-code', code);
app.component('icon-menu', menu);

app.mount('#app');
