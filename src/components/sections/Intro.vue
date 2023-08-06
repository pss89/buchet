<template>
    <div id="intro" class="container mx-auto p-4 flex flex-col md:flex-row items-center mt-5">
      <!-- 프로필 이미지 영역 -->
      <div class="w-full md:w-1/3">
        <img :src="profileImage" alt="Profile" class="rounded-full w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48">
      </div>
  
      <!-- 자기소개 내용 영역 -->
      <div class="w-full md:w-2/3 md:ml-8 mt-4 md:mt-0">
        <h2 class="text-2xl font-bold mb-4">안녕하세요! 박성식입니다.</h2>
        <p class="text-stone-900">
          웹프로그래머로 경력을 쌓고 있습니다.<br>
          FrontEnd는 기본적으로 html,css,javascript/jquery 사용 경험이 있으며 추가적으로 bootstrap, angularjs 와 같은 FrontEnd FrameWork 사용 경험이 있습니다.
          <br><br>
          주업무인 BackEnd는 PHP 언어를 사용하였으며 Codeigniter3.x , Laravel 5.x 사용 경험이 있습니다. 주로 Codeigniter 환경에서 개발을 진행하였습니다.
          <br><br>
          이 외 linux(centos, ubuntu) cli , db(mysql, mariadb) , DevOps(slack, jira/confluence, redmine) , git/github/bitbucket 등을 업무에서 사용 한 경험이 있습니다.
        </p>
        <p class="mt-4 text-stone-900">
          연락 이메일 : seongsigbag2@gmail.com<br>
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
          // profile:{profileUrl:require("../../assets/img/main/pss_profile.jpeg")}
        profileImage: require('@/assets/img/main/pss_caricature.png')
      }
    }
}
</script>

<style scoped>
</style>