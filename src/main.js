import { createApp } from 'vue' // vue instance
import App from './App.vue' // app vue (index) load
import router from '@/router/route' // router lib load
import { createMetaManager } from 'vue-meta' // vue meta load

// fontawesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas,faBars ,faGithub,faInstagram )

import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

// css 파일 로드
import '@/assets/css/reset.css'
import '@/assets/css/main.css'

// instance add
app.use(router).use(createMetaManager()).component('font-awesome-icon', FontAwesomeIcon).use(VueSmoothScroll).mount('#app')