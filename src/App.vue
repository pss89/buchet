<template>
  <div class="app">
    <Header />
    <!-- router 처리 할 때 사용 -->
    <!-- <main class="app-main"> -->
    <!-- 컴포넌트가 렌더링되는 영역 -->
    <!-- <router-view msg="페이지 로드"></router-view> -->
    <!-- </main> -->
    <Intro />
    <Career />
    <Tech />
    <!-- <Project :device="$isMobile"/> -->
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
// import Project from './components/sections/Project.vue'
import Hobby from './components/sections/Hobby.vue'
import Footer from './components/layout/Footer.vue'

// 컴포넌트 정의
export default {
    name: 'App', // 컴포넌트 이름, 필수 항목 x
    components: { // 컴포넌트 항목 정의
        Header,
        Footer,
        Intro,
        Career,
        Tech,
        // Project,
        Hobby
    },
    data() { // 컴포넌트 내부 데이터
      return {

      };
    },
    computed: { // 계산된 속성정보 ex) 기존 데이터를 기반으로 새로운 데이터 계산

    },
    method: { // 해당 컴포넌트에서 실행 할 메서드 정보

    },
    created() { // 컴포넌트 생성 시 실행되는 코드 ex)컴포넌트의 초기화 로직 작성

    },
}
</script>

<!-- 컴포넌트 내부에서 실행되는 css 코드 -->
<style>
</style>
