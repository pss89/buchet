<template>
  <section class="py-12" id="tech">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-left mb-8">경험 한 기술</h2>
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

  <Modal :is-open="isModalOpen" :modalCode="modalCode" @close="isModalOpen = false">
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
  },
  data() {
    return {
      isModalOpen: false,
      modalCode: true
    };
  },
  methods: {
    openModal(tech) {
      if (tech.isComplete == true) {
        this.isModalOpen = true;
        this.modalContent = tech;

        this.modalCode = this.modalContent.code;
      }
    },
  },
  inject: ['constants']
};
</script>

<style>
/* Optional: You can add custom styles here */
</style>