<template>
<footer class="dark:bg-slate-900 text-white py-8 w-full bottom-0 left-0 mt-20">
  <div class="container mx-auto flex flex-col items-center">
    <div class="text-center md:text-left mb-4 md:mb-0">
      <h3 class="text-2xl font-bold">Buchet Introduction WebSite</h3>
      <p class="text-sm">Vue Version : {{ $vueVersion }}</p>
      <p class="text-sm">Device Info : {{ $isMobile ? '모바일' : 'PC' }}</p>
      <p class="text-sm">© 2023 All rights reserved.</p>
    </div>
  </div>
</footer>

<div>
  <!-- 스크롤 시 TOP 버튼 보이기 -->
  <button
    class="fixed bottom-16 right-4 dark:bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-full shadow-lg"
    @click="scrollMoving('top')"
  >
  <!-- TOP -->
  <font-awesome-icon :icon="['fas', 'arrow-up']" />
  </button>

  <!-- 스크롤 시 BOTTOM 버튼 보이기 -->
  <button
    class="fixed bottom-4 right-4 dark:bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-full shadow-lg"
    @click="scrollMoving('bottom')"
  >
  <font-awesome-icon :icon="['fas', 'arrow-down']" />
  </button>
</div>
</template>

<script>
export default {
  name: 'Footer',
  mounted() {
    const vueVersion = this.$vueVersion;
    console.log('Vue.js 버전:', vueVersion);
  },
  methods: {
    scrollMoving(type) {
      if (type == 'top') {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
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