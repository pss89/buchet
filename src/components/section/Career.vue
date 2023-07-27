<template>
  <div class="container mx-auto p-4 mt-10">
    <!-- 제목 -->
    <h1 class="text-4xl font-bold mb-6">경력 소개</h1>

    <!-- 반응형 그리드 레이아웃 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 학력/경력 소개 영역 -->
      <!-- 경력 정보 -->
      <div v-for="career in careers" :key="career.id" class="p-4 border rounded shadow-md">
        <h2 class="text-2xl font-bold">{{ career.company }}</h2>
        <p class="text-gray-600">{{ career.position }}</p>
        <p class="text-gray-600">{{ career.duration }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      careers: [
        {
          id: 1,
          company: "ABC Company",
          position: "Front-end Developer",
          duration: "2020 - 현재",
        },
        {
          id: 2,
          company: "XYZ Agency",
          position: "Web Designer",
          duration: "2018 - 2020",
        },
        // 추가 경력 항목을 원하는 만큼 추가할 수 있습니다.
      ],
    };
  },
};
</script>

<style>
/* 추가적인 스타일링은 여기에 작성 */
</style>
