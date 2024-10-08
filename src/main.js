import { createApp } from 'vue' // vue instance
import App from './App.vue' // app vue (index) load
import router from '@/router/route' // router lib load
// import { createMetaManager } from 'vue-meta' // vue meta load

// fontawesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// vue scroll 라이브러리
// import VueSmoothScroll from 'vue3-smooth-scroll'

// 슬라이드 구현을 위한 라이브러리
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// 코드 하이라이트를 위함
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/github.css'
export default {
  mounted() {
    this.$nextTick(() => {
      const blocks = this.$el.querySelectorAll('pre code')
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    })
  }
}

// lazyload
import VueLazyload from 'vue-lazyload'

// 클립보드 복사 기능
import VueClipboard from 'vue-clipboard2'

// 슬라이드 관련 처리
const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
  defaults: {
    global: {
      /**
       * 클릭 시 번짐 효과 제거
       * @refer https://vuetifyjs.com/en/features/global-configuration/
       */
      ripple: false
    }
  }
})

// 사용 할 fontawesome 추가
library.add(fas, faBars, faGithub, faInstagram)

// 앱 생성
const app = createApp(App)
app.config.devtools = false

// css 파일 로드
import '@/assets/css/reset.css'
// import '@/assets/css/main.css'
import '@/assets/css/tailwind.css'
// 상수 js 로드
import constants from '@/constants.js'

// 상수값을 constants 로 사용하겠다고 선언
app.provide('constants', constants)

// 디바이스 환경 확인
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)

// Vue.config.globalProperties를 사용하여 디바이스 환경을 전역으로 설정
app.config.globalProperties.$isMobile = isMobile

// Vue.js 버전을 전역으로 설정
app.config.globalProperties.$vueVersion = app.version

// 미디어 쿼리를 이용하여 다크 모드 설정 확인
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

// 초기 설정 및 변경 감지
app.isDarkMode = darkModeMediaQuery.matches
darkModeMediaQuery.addEventListener('change', (e) => {
  app.isDarkMode = e.matches
})

// 다크모드 여부
app.config.globalProperties.$SystemDarkMode = app.isDarkMode
// app.config.devtools = process.env.NODE_ENV === 'development'
// app.config.devtools = false

// instance 에 사용 할 정보 제공
app
  .use(router)
  // .use(createMetaManager())
  .component('font-awesome-icon', FontAwesomeIcon)
  // .use(VueSmoothScroll)
  .use(vuetify)
  // .use(hljs)
  .use(VueLazyload, {
    preLoad: 1, // 미리 로드할 이미지의 비율 설정
    // error: 'error.jpg', // 이미지 로드 실패 시 표시할 이미지
    // loading: 'loading.gif', // 이미지 로딩 중 표시할 이미지
    attempt: 1 // 이미지 로딩 시도 횟수
  })
  .use(VueClipboard)
  .mount('#app')
