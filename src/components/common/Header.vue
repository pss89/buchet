<template>
  <header class="bg-cyan-600 flex items-center justify-between p-4 text-white">
    <!-- 왼쪽 상단 로고 -->
    <a class="font-bold text-lg" href="/buchet">
      <img :src="logoImage" alt="Logo" class="w-14" />
    </a>

    <!-- 가운데 상단 메뉴 (작은 화면에서는 숨김) -->
    <div class="hidden md:flex space-x-8">
      <!-- <a href="#" class="hover:text-gray-300" v-for="(menu, index) in constants.MENU.list" :key="menu.key"> -->
      <a href="#" class="hover:text-gray-300" v-for="menu in constants.MENU.list" :key="menu.key">
        <!-- {{ index }} - {{ menu.title }} -->
        {{ menu.title }}
      </a>
    </div>
    
    <ul class="hidden md:flex space-x-4">
      <li @click="pageMove(social.key)" v-for="social in constants.SOCIAL.list" :key="social.key" class="cursor-pointer">
        <font-awesome-icon :icon="social.fa" />
      </li>
    </ul>

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
      class="md:hidden absolute top-16 right-0 bg-cyan-600 rounded shadow-md p-6 space-y-2"
    >
      <a href="#" class="hover:text-gray-300 block" v-for="menu in constants.MENU.list" :key="menu.key">
        {{ menu.title }}
      </a>
      
      <ul class="flex space-x-6 pt-4">
        <li @click="pageMove(social.key)" v-for="social in constants.SOCIAL.list" :key="social.key">
          <font-awesome-icon :icon="social.fa" />
        </li>
      </ul>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      logoImage: require('@/assets/img/icon/buchet_icon.png')
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    pageMove: function(moveType){
      if (!moveType) {
          alert('페이지 이동에 대한 인자값이 없습니다');
          return false;
      }
      
      switch(moveType){
        case 'github': window.open('https://github.com/pss89'); break;
        case 'blog': window.open('https://buchet.tistory.com/'); break;
        case 'insta': window.open('https://www.instagram.com/buchet89/'); break;
        default :
          alert('허용하지 않는 유형입니다.');
          return false;
      }
    }
  },
  inject: ['constants']
};
</script>

<style>
/* 추가적인 스타일링은 여기에 작성 */
</style>
