<template>
    <div class="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <!-- 프로필 이미지 영역 -->
      <div class="w-full md:w-1/3">
        <img src="/src/assets/img/profile.jpg" alt="Profile" class="rounded-full w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48">
      </div>
  
      <!-- 자기소개 내용 영역 -->
      <div class="w-full md:w-2/3 md:ml-8 mt-4 md:mt-0">
        <h2 class="text-2xl font-bold mb-4">안녕하세요! 저는 박성식입니다.</h2>
        <p class="text-gray-600">
          자기소개 영역
        </p>
        <p class="mt-4 text-gray-600">
          이메일: example@example.com<br>
          블로그: [블로그 주소]<br>
          GitHub: [GitHub 주소]
        </p>
      </div>
    </div>
  </template>

<script>
export default {
    name: 'Intro',
    props: {
        msg: String
    },
    data(){
        return{
            profile:{profileUrl:require("../../assets/img/main/pss_profile.jpeg")}
        }
    }
}
</script>

<style scoped>
</style>