<template>
  <footer class="text-white bg-slate-900 py-8 w-full bottom-0 left-0 mt-20">
    <div class="container mx-auto flex flex-col items-center">
      <div class="text-center md:text-left mb-4 md:mb-0">
        <h3 class="text-2xl font-bold">Buchet Introduction WebSite</h3>
        <p class="text-sm">Vue Version : {{ $vueVersion }}</p>
        <p class="text-sm">Device Info : {{ $isMobile ? 'Mobile' : 'PC' }}</p>
        <p class="text-sm">
          System Mode : 
          <button @click="toggleDarkMode">DarkMode
            <span :class="{
              'bg-stone-950' : isDarkMode, 
              'bg-white' : !isDarkMode, 
              'text-yellow-400' : true}"
              >{{ isDarkMode ? ' On' : ' Off' }}</span>
          </button>
        </p>
        <p class="text-sm">© 2023 All rights reserved.</p>
      </div>
    </div>
  </footer>

  <div>
    <button
      :class="{
        'bg-slate-700 text-white' : isDarkMode,
        'bg-slate-100 text-slate-950' : !isDarkMode,
        'fixed bottom-16 right-4 hover:bg-cyan-700 py-2 px-4 rounded-full shadow-lg' : true
      }"
      @click="scrollMoving('top')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
    <button
      :class="{
        'bg-slate-700 text-white' : isDarkMode,
        'bg-slate-100 text-slate-950' : !isDarkMode,
        'fixed bottom-4 right-4 hover:bg-cyan-700 py-2 px-4 rounded-full shadow-lg' : true
      }"
      @click="scrollMoving('bottom')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-down']" />
    </button>
  </div>
</template>

<script setup>
import { toggleDarkMode, isDarkMode } from '../js/useDarkMode';

function scrollMoving(isType) {
  if (isType === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
</script>
