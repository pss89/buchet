import { ref, computed, watch } from 'vue';

// const SystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkMode = ref(JSON.parse(localStorage.getItem('dark-mode')) || false);

// console.log(SystemDarkMode);
// console.log(darkMode.value);
// if (SystemDarkMode && !darkMode.value) {
//     darkMode.value = true;
// }

watch(darkMode, (newVal) => {
    localStorage.setItem('dark-mode', JSON.stringify(newVal));
});

function toggleDarkMode() {
    darkMode.value = !darkMode.value;
}

const isDarkMode = computed(() => darkMode.value);

export { toggleDarkMode, isDarkMode };
