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
import LanguageItem from "@/components/sections/directive/tech/LanguageItem.vue";

export default {
  components: {
    LanguageItem,
  },
  data() {
    return {
      languages: [
        {
          name: "PHP",
          description: "웹개발에 주로 사용되는 인터프리터 서버언어.",
          icon: require('@/assets/img/main/php.png')
        },
        {
          name: "Angular",
          description: "구글에서 개발한 자바스크립트 프론트엔드 프레임워크, 사용자와 상호작용하며 데이터를 효과적으로 제어하고 표시하는 데에 강력한 기능을 제공.",
          icon: require('@/assets/img/main/angular.png')
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