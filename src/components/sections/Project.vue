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
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
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
      >
        <v-sheet
          height="100%"
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ this.modalContent.code + '-' + pl.img }}
            </div>
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

        // let dd = this.constants.PROJECT.projectList[this.modalContent.code]
        // console.log(dd);
      }
      // handleSlideClick(project) {
      //   // 클릭된 슬라이드에 대한 처리를 수행합니다.
      //   console.log('Clicked on project:', project);
      // }
    },
    inject: ['constants']
  }
</script>