<template>
  <div class="container mx-auto p-4 mt-10" id="tech">
    <h2 class="text-3xl font-semibold mb-4">사용 가능한 언어 및 기술</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(item, index) in items" :key="index" class="border rounded p-4">
        <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
        <p class="text-gray-600">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Vue.js",
          description: "프론트엔드 개발에 사용되는 JavaScript 프레임워크",
        },
        {
          title: "Tailwind CSS",
          description: "가볍고 유연한 CSS 프레임워크로 디자인하기 쉬움",
        },
        {
          title: "Node.js",
          description: "서버 사이드 애플리케이션 개발에 사용되는 JavaScript 런타임",
        },
        {
          title: "React",
          description: "Facebook에서 만든 JavaScript 라이브러리로 사용자 인터페이스를 구축하기 위해 사용됨",
        },
        // 추가적인 항목을 원하는 만큼 추가할 수 있습니다.
      ],
    };
  },
};
</script>

<style>
/* 추가적인 스타일링은 여기에 작성 */
</style>
