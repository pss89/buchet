<template>
  <header class="bg-blue-500 flex items-center justify-between p-4 text-white">
    <!-- 왼쪽 상단 로고 -->
    <div class="font-bold text-lg">Logo</div>

    <!-- 가운데 상단 메뉴 (작은 화면에서는 숨김) -->
    <div class="hidden md:flex space-x-4">
      <a href="#" class="hover:text-gray-300">Menu 1</a>
      <a href="#" class="hover:text-gray-300">Menu 2</a>
      <a href="#" class="hover:text-gray-300">Menu 3</a>
      <a href="#" class="hover:text-gray-300">Menu 4</a>
    </div>

    <!-- 오른쪽 상단 아이콘 (작은 화면에서는 숨김) -->
    <div class="hidden md:flex space-x-4">
      <button class="text-white">
        깃허브
      </button>
      <button class="text-white">
        인스타
      </button>
      <button class="text-white">
        티스토리
      </button>
    </div>

    <!-- 햄버거 아이콘 (작은 화면에서만 보임) -->
    <button class="md:hidden text-white" @click="toggleMenu">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>

    <!-- 모바일 메뉴 (작은 화면에서만 보임) -->
    <div
      v-show="showMenu"
      class="md:hidden absolute top-16 right-4 bg-blue-500 rounded shadow-md p-2 space-y-2"
    >
      <a href="#" class="hover:text-gray-300 block">Menu 1</a>
      <a href="#" class="hover:text-gray-300 block">Menu 2</a>
      <a href="#" class="hover:text-gray-300 block">Menu 3</a>
      <a href="#" class="hover:text-gray-300 block">Menu 4</a>

      <div>
        <p>인스타</p>
        <p>깃허브</p>
        <p>티스토리</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
/* 추가적인 스타일링은 여기에 작성 */
</style>
