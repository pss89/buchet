import { createApp } from 'vue' // vue instance
import App from './App.vue' // app vue (index) load
import router from '@/router/' // router lib load

// instance add
createApp(App).use(router).mount('#app')