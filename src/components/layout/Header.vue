<template>
  <header class="dark:bg-slate-900 flex items-center justify-between p-4 text-white">
    
    <!-- 왼쪽 상단 로고 -->
    <a class="font-bold text-lg" href="/buchet">
      <!-- <img :src="require('@/assets/img/icon/buchet_icon.png')" alt="Logo" class="w-14" /> -->
      <img v-lazy="imageUrl" alt="Logo" class="w-14" />
    </a>

    <!-- 가운데 상단 메뉴 (작은 화면에서는 숨김) -->
    <div class="hidden md:flex space-x-8">
      <!-- <a href="#" class="hover:text-gray-300" v-for="(menu, index) in constants.MENU.list" :key="menu.key"> -->
      <!-- :href="'#'+menu.key"  -->
      <a 
        class="hover:text-gray-300 cursor-pointer"
        v-for="menu in constants.MENU.list"
        :key="menu.key"
        @click="scrollToSection(menu.key)"
        >
        {{ menu.title }}
      </a>
    </div>
    
    <ul class="hidden md:flex space-x-4">
      <li @click="pageMove(social.key)" v-for="social in constants.SOCIAL.list" 
        :key="social.key" class="cursor-pointer"
        >
        <font-awesome-icon :icon="social.fa" />
      </li>
    </ul>

    <!-- 햄버거 아이콘 (작은 화면에서만 보임) -->
    <button class="md:hidden text-white" @click="toggleMenu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>

    <!-- 모바일 메뉴 (작은 화면에서만 보임) -->
    <div
      v-show="showMenu"
      class="md:hidden absolute top-16 right-0 dark:bg-slate-900 rounded shadow-md p-6 space-y-2"
    >
      <a href="#" class="hover:text-gray-300 block" v-for="menu in constants.MENU.list" 
        :key="menu.key"
      >
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
      imageUrl: require('@/assets/img/icon/buchet_icon.png')
    };
  },
  mounted() {
    const vueVersion = this.$vueVersion;
    console.log('Vue.js 버전:', vueVersion);
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
    },
    scrollToSection: function(section){
      // window.scrollTo({ top: 0, behavior: "smooth" });
      const targetElement = document.getElementById(section);
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },
  inject: ['constants']
};
</script>

<style>
/* 추가적인 스타일링은 여기에 작성 */
</style>
