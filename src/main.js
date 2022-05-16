import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'

import BasesButton from './components/UI/BasesButton.vue'


const app = createApp(App)

app.component('base-button',BasesButton)
app.use(router)
app.mount('#app')

