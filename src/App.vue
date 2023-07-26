<template>
  <div class="app">
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `Buchet About` }}</template>
    </metainfo>
    <Header />
    <!-- router 처리 할 때 사용 -->
    <!-- <main class="app-main"> -->
    <!-- 컴포넌트가 렌더링되는 영역 -->
    <!-- <router-view msg="페이지 로드"></router-view> -->
    <!-- </main> -->
    <Intro msg="소개" />
    <Career msg="경력" />
    <Tech msg="기술" />
    <Project msg="프로젝트" />
    <Hobby msg="취미" />
    <Footer />
  </div>
</template>

<script>
// 컴포넌트 import
import Header from './components/common/Header.vue'
import Intro from './components/section/Intro.vue'
import Career from './components/section/Career.vue'
import Tech from './components/section/Tech.vue'
import Project from './components/section/Project.vue'
import Hobby from './components/section/Hobby.vue'
import Footer from './components/common/Footer.vue'
import { useMeta } from 'vue-meta'

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
        useMeta({
            title: 'Buchet About',
            htmlAttrs: { lang: 'ko', amp: true },
            bodyAttrs: { 
              class: ['dark-mode','mobile'],
              tabIndex: 0
            }
        })
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
