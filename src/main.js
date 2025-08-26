import './assets/main.css'
<<<<<<< HEAD
import '@mdi/font/css/materialdesignicons.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
=======

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
>>>>>>> 79f1500 (Revert "FEAT-1: InicioView.vue CSS")
