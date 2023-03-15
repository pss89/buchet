import { createApp } from 'vue' // vue instance
import App from './App.vue' // app vue (index) load
import router from '@/router/route' // router lib load
import { createMetaManager } from 'vue-meta' // vue meta load
// import LoadScript from 'vue-plugin-load-script';

// css 파일 로드
import '@/assets/css/reset.css'

// instance add
// createApp(App).use(router).use(createMetaManager()).use(LoadScript).mount('#app')
createApp(App).use(router).use(createMetaManager()).mount('#app')