<template>
  <div class="flex flex-wrap justify-center">
    <h1>취미</h1>
    <!-- 반복문을 활용하여 각 취미 카드를 표시합니다. -->
    <div v-for="hobby in hobbies" :key="hobby.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4">
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
    return {
      hobbies: [
        {
          id: 1,
          title: "Photography",
          description: "I love capturing beautiful moments with my camera.",
          image: "/src/assets/hobbies/photography.jpg",
        },
        {
          id: 2,
          title: "Cooking",
          description: "Cooking is my passion. I enjoy experimenting with new recipes.",
          image: "/src/assets/hobbies/cooking.jpg",
        },
        // Add more hobbies here...
      ],
    };
  },
};
</script>
