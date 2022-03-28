import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.scss'

createApp(App).use(store).mount('#app')
