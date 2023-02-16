<template>
  <!-- 
    - 각 컴포넌트 실제 호출?
    - msg 변수는 각 컴포넌트에서 사용 가능
   -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <SubPage msg="두번째 단락임"/> -->
  <div class="app">
    <Header msg="헤더임" />
    <main class="app-main">
      <!-- 컴포넌트가 렌더링되는 영역 -->
      <router-view msg="페이지 로드"></router-view>
    </main>
    <Footer msg="풋터임" />
  </div>
</template>

<script>
// 컴포넌트 import
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import SubPage from './components/SubPage.vue'

// 컴포넌트 정의
export default {
  name: 'App',
  components: {
    Header,
    Footer
    // HelloWorld,
    // SubPage
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
