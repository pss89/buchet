<template>
  <div id="intro" class="container mx-auto p-4 flex flex-col md:flex-row items-center mt-5">
    <!-- 프로필 이미지 영역 -->
    <div class="w-full md:w-1/3">
      <img v-lazy="profileImage" alt="Profile" class="rounded-full w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48">
    </div>

    <!-- 자기소개 내용 영역 -->
    <div class="w-full md:w-2/3 md:ml-8 mt-4 md:mt-0" v-html="constants.INTRO.description">
    </div>
  </div>
</template>

<script>
export default {
    name: 'Intro',
    props: {
      // msg: String
    },
    data(){
      return{
        profileImage: require('@/assets/img/main/pss_caricature.png')
      }
    },
    inject: ['constants']
}
</script>

<style scoped>
</style>