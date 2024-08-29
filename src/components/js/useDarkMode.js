import { ref, computed, watch } from 'vue';

const darkMode = ref(JSON.parse(sessionStorage.getItem('dark-mode')) || false);

watch(darkMode, (newVal) => {
    sessionStorage.setItem('dark-mode', JSON.stringify(newVal));
});

function toggleDarkMode() {
    darkMode.value = !darkMode.value;
}

const isDarkMode = computed(() => darkMode.value);

export { toggleDarkMode, isDarkMode };
