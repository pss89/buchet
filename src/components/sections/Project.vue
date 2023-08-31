<template>
  <div class="container mx-auto px-4" id="project">
    <h2 class="text-3xl font-bold text-left mb-8">프로젝트</h2>
    <div class="w-full sm:w-3/3 md:w-2/2 lg:w-3/3 xl:w-4/4 mx-auto">
      <v-carousel
        height="600"
        hide-delimiters
        progress="primary"
      >
        <v-carousel-item
          v-for="(project, i) in constants.PROJECT.list"
          :key="i"
          @click="openModal(project)"
        >
          <v-sheet
            height="100%"
          >
            <div class="flex items-center justify-center cursor-pointer h-full bg-cyan-600 hover:bg-cyan-700 transition">
              <div class="text-3xl font-semibold text-white">
                {{ project.title }}
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>

  <Modal :is-open="isModalOpen" @close="isModalOpen = false">
    <v-carousel
      height="600"
      hide-delimiters
      progress="primary"
    >
      <v-carousel-item
        v-for="(pl, i) in constants.PROJECT.capture[this.modalContent.code]"
        :key="i"
        @click="openWindow(pl)"
      >
        <v-sheet
          height="100%"
        >
          <h1 class="text-3xl ml-5 mt-5">{{ pl.title }}</h1>
          <div class="d-flex fill-height justify-center align-center cursor-pointer">
            <img v-lazy="pl.img" :alt="pl.title" class="w-3/4 h-3/4" />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </Modal>
</template>

<script>
  import Modal from "@/components/sections/directive/common/ModalPopup.vue";

  export default {
    components: {
      Modal
    },
    data () {
      return {
        isModalOpen: false
      }
    },
    methods: {
      openModal(project) {
        this.isModalOpen = true;
        this.modalContent = project;
      },
      openWindow(project) {
        const baseUrl = window.location.origin;
        const imgPath = project.img;

        const openUrl = baseUrl + imgPath;

        window.open(openUrl, "_blank"); // 새 창으로 이미지 URL 열기
      }
    },
    inject: ['constants']
  }
</script>