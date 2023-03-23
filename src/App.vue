<template>
  <div class="app">
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `buchet_blog` }}</template>
    </metainfo>
    <Header msg="헤더임" />
    <!-- <main class="app-main"> -->
      <!-- 컴포넌트가 렌더링되는 영역 -->
      <!-- <router-view msg="페이지 로드"></router-view> -->
    <!-- </main> -->
    <Intro msg="소개영역" />
    <Footer msg="풋터임" />
  </div>
</template>

<script>
// 컴포넌트 import
import Header from './components/common/Header.vue'
import Intro from './components/section/Intro.vue'
import Footer from './components/common/Footer.vue'
import { useMeta } from 'vue-meta'

// 컴포넌트 정의
export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Intro
    },
    setup () {
        useMeta({
            title: 'buchet_blog',
            htmlAttrs: { lang: 'en', amp: true }
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
