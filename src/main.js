import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const socket = new WebSocket('wss://lab6-back.onrender.com/primus');

socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened:', event);
});

socket.addEventListener('message', (event) => {
  console.log('WebSocket message received:', event);
  const data = JSON.parse(event.data);
});

const app = createApp(App);
app.config.globalProperties.$socket = socket;
app.use(router);
app.mount('#app');
