<template>
  <div class="container mx-auto p-4 mt-10" id="career">
    <!-- 제목 -->
    <h1 class="text-4xl font-bold mb-6">{{ constants.S_CAREER.subject }}</h1>

    <!-- 반응형 그리드 레이아웃 -->
    <div class="grid grid-cols-1 mb-10 md:grid-cols-2 gap-6">
      <!-- 학력 소개 영역 -->
      <div v-for="s_career in constants.S_CAREER.list" :key="s_career.key" class="p-4 border rounded shadow-md">
        <h2 class="text-2xl font-bold">{{ s_career.name }}</h2>
        <p class="text-gray-600">{{ s_career.major }}</p>
        <p class="text-gray-600">{{ formatDate(s_career.period.startDate) }} ~ {{ formatDate(s_career.period.endDate) }}</p>
      </div>
      <!-- 경력 정보 -->
    </div>

    <!-- 제목 -->
    <h1 class="text-4xl font-bold mb-6">{{ constants.C_CAREER.subject }}</h1>

    <!-- 반응형 그리드 레이아웃 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 경력 소개 영역 -->
      <div v-for="c_career in constants.C_CAREER.list" :key="c_career.key" class="p-4 border rounded shadow-md">
        <h2 class="text-2xl font-bold">{{ c_career.name }}</h2>
        <p class="text-gray-600">{{ c_career.belong }} - {{ c_career.position }}</p>
        <p class="text-gray-600">{{ formatDate(c_career.period.startDate) }} ~ {{ formatDate(c_career.period.endDate) }}</p>
        <br/>
        <span class="text-gray-600">
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
      const year = Math.floor(date / 100);
      const month = date % 100;
      return `${year}.${month.toString().padStart(2, '0')}`;
    }
  },
  inject: ['constants']
};
</script>

<style>
/* 추가적인 스타일링은 여기에 작성 */
</style>
