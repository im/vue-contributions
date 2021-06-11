import { createApp } from 'vue'
// import VueContributions from './index.ts'
import VueContributions from '../dist/vue-contributions.es.js'
import '../dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueContributions)


app.mount('#app')
