<template>
  <div class="app">
    <!-- <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `Buchet About` }}</template>
    </metainfo> -->
    <Header />
    <!-- router 처리 할 때 사용 -->
    <!-- <main class="app-main"> -->
    <!-- 컴포넌트가 렌더링되는 영역 -->
    <!-- <router-view msg="페이지 로드"></router-view> -->
    <!-- </main> -->
    <Intro />
    <Career />
    <Tech />
    <Project />
    <Hobby />
    <Footer />
  </div>
</template>

<script>
// 컴포넌트 import
import Header from './components/layout/Header.vue'
import Intro from './components/sections/Intro.vue'
import Career from './components/sections/Career.vue'
import Tech from './components/sections/Tech.vue'
import Project from './components/sections/Project.vue'
import Hobby from './components/sections/Hobby.vue'
import Footer from './components/layout/Footer.vue'
// import { useMeta } from 'vue-meta';

// import iconImage from "@/assets/img/icon/icon-image.png";

// 컴포넌트 정의
export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Intro,
        Career,
        Tech,
        Project,
        Hobby
    },
    setup () {
      // useMeta({
      //   meta: [
      //     // if no subcomponents specify a metaInfo.title, this title will be used
      //     {title: 'Default Title', name: 'title'}
      //     // all titles will be injected into this template
      //   ],
      // })
      // useMeta({
      //   title: 'Buchet Introduction.',
      //   htmlAttrs: { lang: 'ko', amp: true },
      //   bodyAttrs: {
      //     class: ['dark-mode', 'mobile'],
      //     tabIndex: 0
      //   },
      //   metaInfo: {
      //     meta: [
      //       { charset: 'utf-8' },
      //       { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      //     ]
      //   }
        
      //   // meta :[
      //     // { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' },
      //     // { name: 'description', content: 'Buchet Introduction WebSite.' },
      //     // // Open Graph meta 설정
      //     // { property: 'og:title', content: 'Buchet Introduction.' },
      //     // { property: 'og:description', content: 'Buchet Introduction WebSite.' },
      //     // { property: 'og:image', content: require('@/assets/img/icon/buchet_icon.png') },
      //     // { property: 'og:url', content: window.location.href },
      //   // ]
      //   // meta: [
      //   //   // { charset: 'utf-8'},
      //   //   { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' },
      //   //   { name: 'description', content: 'Buchet Introduction WebSite.' },
      //   //   // Open Graph meta 설정
      //   //   { property: 'og:title', content: 'Buchet Introduction.' },
      //   //   { property: 'og:description', content: 'Buchet Introduction WebSite.' },
      //   //   { property: 'og:image', content: require('@/assets/img/icon/buchet_icon.png') },
      //   //   { property: 'og:url', content: window.location.href },
      //   // ]
      // });
    }
}
</script>

<style>
</style>
