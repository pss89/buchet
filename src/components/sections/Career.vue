<template>
  <div class="container mx-auto p-4 mt-10" id="career">
    <!-- 제목 -->
    <h1 class="text-4xl font-bold mb-6">{{ constants.S_CAREER.subject }}</h1>

    <!-- 반응형 그리드 레이아웃 -->
    <div class="grid grid-cols-1 mb-10 md:grid-cols-2 gap-6">
      <!-- 학력 소개 영역 -->
      <div v-for="s_career in constants.S_CAREER.list" :key="s_career.key" 
        class="p-4 border rounded shadow-md">
        <h2 class="text-2xl font-bold">{{ s_career.name }}</h2>
        <p>{{ s_career.major }}</p>
        <p>{{ formatDate(s_career.period.startDate) }} ~ {{ formatDate(s_career.period.endDate) }}</p>
      </div>
      <!-- 경력 정보 -->
    </div>

    <!-- 제목 -->
    <h1 class="text-4xl font-bold mb-6">{{ constants.C_CAREER.subject }} {{ calcCareer(constants.C_CAREER.list) }}</h1>

    <!-- <font-awesome-icon icon="arrow-right" class="text-gray-600" /> -->
    <!-- 반응형 그리드 레이아웃 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 경력 소개 영역 -->
      <div v-for="c_career in constants.C_CAREER.list" :key="c_career.key" class="p-4 border rounded shadow-md">
        <h2 class="text-2xl font-bold">{{ c_career.name }}</h2>
        <p>{{ c_career.belong }} - {{ c_career.position }}</p>
        <p>{{ formatDate(c_career.period.startDate) }} ~ {{ formatDate(c_career.period.endDate) }} ({{calculateTotalCareer(c_career.period.startDate, c_career.period.endDate)}})</p>
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
        return '현재';
      }
    },

    // 시작일을 기준으로 현재까지의 경력을 n년n월로 계산해주는 함수 ex) 7년10개월차
    calcCareer: function(cList){
      if (!Array.isArray(cList) || cList.length === 0) {
        return '0년 0개월';
      }

      let totalMonths = 0;
      const now = new Date();

      cList.forEach(career => {
        const startYear = Math.floor(career.period.startDate / 100);
        const startMonth = (career.period.startDate % 100);

        let endYear, endMonth;
        if (career.period.endDate) {
          endYear = Math.floor(career.period.endDate / 100);
          endMonth = career.period.endDate % 100;
        } else {
          endYear = now.getFullYear();
          endMonth = now.getMonth() + 1;
        }

        // 시작 월과 종료 월 모두 포함
        totalMonths += (endYear - startYear) * 12 + (endMonth - startMonth + 1); // 조정된 부분
      });

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      if (months == 0) {
        return `(${years}년)`;
      } else {
        return `(${years}년 ${months}개월)`;
      }
    },

    calculateTotalCareer: function(startDate, endDate) {
      if (!startDate || startDate.length !== 6) return '';

      // 2. startDate의 연도와 월을 추출하여 숫자로 변환
      const startYear = parseInt(startDate.substring(0, 4), 10);
      const startMonth = parseInt(startDate.substring(4, 6), 10);

      let endYear, endMonth;

      // 3. endDate가 없거나 유효하지 않은 경우 현재 시점 적용
      if (!endDate || endDate.length !== 6) {
        const now = new Date();
        endYear = now.getFullYear();
        // 자바스크립트의 getMonth()는 0(1월)부터 시작하므로 1을 더해 실제 월을 맞춤
        endMonth = now.getMonth() + 1; 
      } else {
        // 4. endDate가 있는 경우 연도와 월 추출
        endYear = parseInt(endDate.substring(0, 4), 10);
        endMonth = parseInt(endDate.substring(4, 6), 10);
      }

      // 5. 총 개월 수 차이 계산 및 '+1 month' 조건 적용
      let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
      totalMonths += 1; 

      // (예외 처리) 시작일이 종료일보다 미래인 경우
      if (totalMonths <= 0) return '0개월';

      // 6. 총 개월 수를 '년'과 '개월'로 분리
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      // 7. 결과 문자열 포맷팅
      let resultText = '';
      if (years > 0) {
        resultText += `${years}년 `;
      }
      if (months > 0 || years === 0) { 
        resultText += `${months}개월`;
      }

      return resultText.trim();
    }
  },
  inject: ['constants']
};
</script>

<style>
/* 추가적인 스타일링은 여기에 작성 */
</style>
