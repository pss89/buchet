<template>
  <div class="container mx-auto px-4" id="hobby">
    <h2 class="text-3xl font-bold text-left mb-8">취미</h2>
    <div v-for="hobby in constants.HOBBY.list" :key="hobby.key" class="w-full lg:w-4/4 px-4 py-4">
      <div class="bg-white rounded-lg shadow-md p-4">
        <!-- 이미지 사이즈 줄여야함 -->
        <img :src="hobby.img" :alt="hobby.title" class="h-45 w-full object-cover rounded-lg">
        <h3 class="text-xl font-semibold mt-2">{{ hobby.title }}</h3>
        <p class="text-gray-600 mt-2">{{ hobby.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  inject: ['constants']
};
</script>