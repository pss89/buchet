<template>
  <section class="py-12" id="tech">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-left mb-8">사용 경험 기술</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <LanguageItem
          v-for="tech in constants.TECH.list"
          :key="tech.key"
          :name="tech.name"
          :description="tech.description"
          :icon="tech.icon"
          :isComplete="tech.isComplete"
          @open-modal="openModal(tech)"
        />
      </div>
    </div>
  </section>

  <Modal :is-open="isModalOpen" @close="isModalOpen = false">
    <h3 class="text-center">{{ modalContent.codeTitle }}</h3>
    <CodeHighlight :code="modalContent.code" :language="modalContent.languageType" />
  </Modal>
</template>

<script>
import LanguageItem from "@/components/sections/directive/tech/LanguageItem.vue";
import Modal from "@/components/sections/directive/common/ModalPopup.vue";
import CodeHighlight from "@/components/sections/directive/common/CodeHighlight.vue";

export default {
  components: {
    LanguageItem,
    Modal,
    CodeHighlight
  },
  computed: {
    formattedDescription(){
      return this.modalContent.description.replace(/\n/g, '<br>');
    }
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal(tech) {
      if (tech.isComplete == true) {
        this.isModalOpen = true;
        this.modalContent = tech;
      }
    },
  },
  inject: ['constants']
};
</script>

<style>
/* Optional: You can add custom styles here */
</style>