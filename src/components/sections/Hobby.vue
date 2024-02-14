<template>
  <div class="container mx-auto p-4 mt-10" id="hobby">
    <h1 class="text-4xl font-bold mb-6">취미</h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div v-for="hobby in constants.HOBBY.list" :key="hobby.key" class="dark:bg-slate-700 p-4 shadow-md">
        <img v-lazy="hobby.img" :alt="hobby.title" class="w-full h-auto mb-4">
        <h3 class="text-xl font-semibold mt-2">{{ hobby.title }}</h3>
        <p v-html="hobby.description"></p>
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