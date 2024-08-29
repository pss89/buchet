<template>
  <footer class="text-white bg-slate-900 dark:bg-slate-900 py-8 w-full bottom-0 left-0 mt-20">
    <div class="container mx-auto flex flex-col items-center">
      <div class="text-center md:text-left mb-4 md:mb-0">
        <h3 class="text-2xl font-bold">Buchet Introduction WebSite</h3>
        <p class="text-sm">Vue Version : {{ $vueVersion }}</p>
        <p class="text-sm">Device Info : {{ $isMobile ? 'Mobile' : 'PC' }}</p>
        <p class="text-sm">System Mode : {{ $isDarkMode ? 'DarkMode On' : 'DarkMode Off' }}</p>
        <!-- <p class="text-sm">System Mode : <button @click="darkModeToggle()">DarkMode{{ isDarkMode ? ' On' : ' Off' }}</button></p> -->
        <p class="text-sm">© 2023 All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- :class = "{ 'bg-slate-100' : !isDarkMode, 'dark:bg-slate-700' : isDarkMode }" -->
  <div>
    <!-- 스크롤 시 top, bottom 버튼 보이기 -->
    <button
      class="fixed bottom-16 right-4 bg-slate-100 dark:bg-slate-700 hover:bg-cyan-700 py-2 px-4 rounded-full shadow-lg"
      @click="scrollMoving('top')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
    <button
      class="fixed bottom-4 right-4 bg-slate-100 dark:bg-slate-700 hover:bg-cyan-700 py-2 px-4 rounded-full shadow-lg"
      @click="scrollMoving('bottom')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-down']" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      isAtTop: true,
      isDarkMode: this.$isDarkMode
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollMoving(isType) {
      if (isType === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }
    },
    handleScroll() {
      this.isAtTop = window.scrollY === 0
    },
    darkModeToggle() {
      // 다크 모드를 토글합니다.
      this.isDarkMode = !this.isDarkMode;
      // 전역 프로퍼티를 업데이트합니다.
      this.$root.$isDarkMode = this.isDarkMode;
    }
  },
  watch: {

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
