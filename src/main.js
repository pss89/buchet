import { createApp } from 'vue' // vue instance
import App from './App.vue' // app vue (index) load
import router from '@/router/route' // router lib load
import { createMetaManager } from 'vue-meta' // vue meta load

// fontawesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSmoothScroll from 'vue3-smooth-scroll'

// 슬라이드 구현을 위한 라이브러리
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// 코드 하이라이트를 위함
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';

const vuetify = createVuetify({
    components,
    directives,
    ssr:true,
    defaults: {
        global: {
        /**
         * 클릭 시 번짐 효과 제거
         * @refer https://vuetifyjs.com/en/features/global-configuration/
         */
        ripple: false,
        },
    },
});

library.add(fas,faBars ,faGithub,faInstagram )

const app = createApp(App)

// css 파일 로드
import '@/assets/css/reset.css'
// import '@/assets/css/main.css'
import '@/assets/css/tailwind.css';
// 상수 js 로드
import constants from "@/constants.js"

app.provide('constants', constants);

// instance add
app
.use(router)
.use(createMetaManager())
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueSmoothScroll)
.use(vuetify)
.use(hljs)
.mount('#app')