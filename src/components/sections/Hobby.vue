<template>
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-left mb-8">취미</h2>
    <!-- 반복문을 활용하여 각 취미 카드를 표시합니다. -->
    <div v-for="hobby in constants.HOBBY.list" :key="hobby.key" class="w-full lg:w-1/4 px-4 py-4">
      <div class="bg-white rounded-lg shadow-md p-4">
        <!-- <img :src="hobby.image" alt="Hobby Image" class="h-32 w-full object-cover rounded-lg"> -->
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
