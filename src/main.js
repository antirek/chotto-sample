// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import '/node_modules/@mobilon-dev/chotto/dist/style.css';

const pinia = createPinia()
const app = createApp(App);

app.use(pinia)
app.mount('#app')