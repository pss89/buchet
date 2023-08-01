<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">사용 가능 언어 및 기술</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <LanguageItem
          v-for="language in languages"
          :key="language.name"
          :name="language.name"
          :description="language.description"
          :icon="language.icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
import LanguageItem from "./LanguageItem.vue";

export default {
  components: {
    LanguageItem,
  },
  data() {
    return {
      languages: [
        {
          name: "JavaScript",
          description: "웹 프론트엔드 개발 언어",
          icon: "/img/icons/javascript.png",
        },
        {
          name: "Python",
          description: "다목적 프로그래밍 언어",
          icon: "/img/icons/python.png",
        },
        // 다른 언어 및 기술들도 추가해주세요
      ],
    };
  },
};
</script>

<style>
/* Optional: You can add custom styles here */
</style>
