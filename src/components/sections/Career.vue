<template>
  <div class="container mx-auto p-4 mt-10" id="career">
    <!-- 제목 -->
    <h1 class="text-4xl font-bold mb-6">{{ constants.S_CAREER.subject }}</h1>

    <!-- 반응형 그리드 레이아웃 -->
    <div class="grid grid-cols-1 mb-10 md:grid-cols-2 gap-6">
      <!-- 학력 소개 영역 -->
      <div v-for="s_career in constants.S_CAREER.list" :key="s_career.key" class="p-4 border rounded shadow-md">
        <h2 class="text-2xl font-bold">{{ s_career.name }}</h2>
        <p>{{ s_career.major }}</p>
        <p>{{ formatDate(s_career.period.startDate) }} ~ {{ formatDate(s_career.period.endDate) }}</p>
      </div>
      <!-- 경력 정보 -->
    </div>

    <!-- 제목 -->
    <h1 class="text-4xl font-bold mb-6">{{ constants.C_CAREER.subject }} {{ calcCareer(constants.C_CAREER.startDate) }}</h1>

    <!-- <font-awesome-icon icon="arrow-right" class="text-gray-600" /> -->
    <!-- 반응형 그리드 레이아웃 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 경력 소개 영역 -->
      <div v-for="c_career in constants.C_CAREER.list" :key="c_career.key" class="p-4 border rounded shadow-md">
        <h2 class="text-2xl font-bold">{{ c_career.name }}</h2>
        <p>{{ c_career.belong }} - {{ c_career.position }}</p>
        <p>{{ formatDate(c_career.period.startDate) }} ~ {{ formatDate(c_career.period.endDate) }}</p>
        <br/>
        <span>
          <p class="font-bold">대표 업무 설명</p>
          <span v-html="c_career.desc" class="text-sm"></span>
        </span>
      </div>
      <!-- 경력 정보 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    formatDate: function(date){
      if (date) {
        const year = Math.floor(date / 100);
        const month = date % 100;
        return `${year}.${month.toString().padStart(2, '0')}`;
      } else {
        return '';
      }
    },
    // 시작일을 기준으로 현재까지의 경력을 연차로 계산해주는 함수
    // calcCareer: function(startDate){
    //   const today = new Date();
    //   const year = today.getFullYear();
    //   const month = today.getMonth() + 1;
    //   const current = year * 100 + month;
    //   const diff = current - startDate;

    //   let careerYears = Math.floor(diff / 100)+"년차";
    //   return "("+careerYears+")";
    // },

    // 시작일을 기준으로 현재까지의 경력을 n년n월로 계산해주는 함수 ex) 7년10개월차
    calcCareer: function(startDate){
      const startYear = parseInt(startDate.slice(0, 4));
      const startMonth = parseInt(startDate.slice(4, 6)) - 1; // JavaScript의 월은 0부터 시작합니다.

      const start = new Date(startYear, startMonth);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();

      if (months < 0) {
          years--;
          months += 12;
      }

      return `(${years}년 ${months}개월차)`;
    }
  },
  inject: ['constants']
};
</script>

<style>
/* 추가적인 스타일링은 여기에 작성 */
</style>
