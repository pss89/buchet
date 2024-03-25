<template>
  <footer class="dark:bg-slate-900 py-8 w-full bottom-0 left-0 mt-20">
    <div class="container mx-auto flex flex-col items-center">
      <div class="text-center md:text-left mb-4 md:mb-0">
        <h3 class="text-2xl font-bold">Buchet Introduction WebSite</h3>
        <p class="text-sm">Vue Version : {{ $vueVersion }}</p>
        <p class="text-sm">Device Info : {{ $isMobile ? 'Mobile' : 'PC' }}</p>
        <p class="text-sm">System Mode : {{ $isDarkMode ? 'DarkMode On' : 'DarkMode Off' }}</p>
        <p class="text-sm">© 2023 All rights reserved.</p>
      </div>
    </div>
  </footer>

  <div>
    <!-- 스크롤 시 top, bottom 버튼 보이기 -->
    <button
      class="fixed bottom-16 right-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-700 py-2 px-4 rounded-full shadow-lg"
      @click="scrollMoving('top')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
    <button
      class="fixed bottom-4 right-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-700 py-2 px-4 rounded-full shadow-lg"
      @click="scrollMoving('bottom')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-down']" />
      <!-- <font-awesome-icon v-if="isAtTop" :icon="['fas', 'arrow-down']" />
      <font-awesome-icon v-else :icon="['fas', 'arrow-up']" /> -->
    </button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isAtTop: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // const vueVersion = this.$vueVersion;
    // console.log('Vue.js 버전:', vueVersion);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollMoving(isType) {
      if (isType === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
      // if (this.isAtTop) { // 탑일 경우 아래쪽으로 이동되어야 함
      //   window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      // } else {
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // }
    },
    handleScroll() {
      this.isAtTop = window.scrollY === 0;
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  footer {
    /* 풋터의 위치를 원래대로 설정합니다. */
    position: static;
    /* 기본값으로 설정합니다. */
    z-index: initial;
  }
}
</style>