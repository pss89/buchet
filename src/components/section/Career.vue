<!-- 경력 -->
<template>
    <div id="career" class="container mx-auto p-4 flex flex-col md:flex-row items-center mt-5">
      <!-- 경력 부분 -->
      <div class="w-full md:ml-8 mt-4 md:mt-0">
        <p>{{ msg }}</p>
        <!-- <h2 class="text-2xl font-bold mb-4">안녕하세요! 박성식입니다.</h2>
        <p class="text-stone-900">
          웹프로그래머로 경력을 쌓고있습니다.<br>
          FrontEnd는 기본적으로 html,css,javascript/jquery 사용 경험이 있으며 추가적으로 bootstrap, angularjs 와 같은 FrontEnd FrameWork 사용 경험이 있습니다.
          <br><br>
          주업무인 BackEnd는 PHP 언어를 사용하였으며 Codeigniter3.x , Laravel 5.x 사용 경험이 있습니다. 주로 Codeigniter 환경에서 개발을 진행하였습니다.
          <br><br>
          이 외 간단한 linux(centos, ubuntu) , db (mysql, mariadb) , DevOps (slack, jira/confluence, redmine) , git/github/bitbucket 등을 업무에서 사용 한 경험이 있습니다.
        </p>
        <p class="mt-4 text-stone-900">
          이메일 : seongsigbag2@gmail.com<br>
        </p> -->
      </div>

      <!-- 버튼을 클릭하면 레이어 팝업을 열기 위한 버튼 -->
      <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded">Open Modal</button>

      <!-- 레이어 팝업 (조건부 렌더링) -->
      <div v-if="isModalOpen" class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded-lg">
          <h2 class="text-xl font-bold mb-2">Modal Content</h2>
          <p>This is the modal content.</p>
          <!-- 닫기 버튼을 클릭하면 레이어 팝업이 닫힙니다 -->
          <button @click="closeModal" class="bg-red-500 text-white px-4 py-2 rounded mt-4">Close</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Career',
    inject: ['constants'],
    props: {
        msg: String
    },
    data(){
        return{
            // test:constants.CAREER.subject,
            // career:constants.CAREER.list,
            isModalOpen: false, // 레이어 팝업 열림 여부를 저장하는 변수
        }
    },
      methods: {
        openModal() {
          this.isModalOpen = true; // 레이어 팝업을 열기 위한 메서드
        },
        closeModal() {
          this.isModalOpen = false; // 레이어 팝업을 닫기 위한 메서드
        },
    },
}
</script>

<style scoped>
</style>