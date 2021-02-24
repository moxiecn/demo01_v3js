import { createApp } from 'vue'
import RootApp02 from './RootApp.vue'
import store from './store/index.js'
import { currency } from './currency'

const app = createApp(RootApp02)

app.use(store)

app.mount('#app02')