import { createApp } from 'vue'
import './style.css'
import router from './components/Routers/route.js'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')
