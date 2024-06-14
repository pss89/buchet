<template>
  <div class="container mx-auto px-4" id="project">
    <h2 class="text-3xl font-bold text-left mb-8">프로젝트</h2>
    <div class="w-full sm:w-3/3 md:w-2/2 lg:w-3/3 xl:w-4/4 mx-auto">
      <v-carousel
        height="600"
        hide-delimiters
        progress="primary"
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
      >
        <v-carousel-item
          v-for="(project, i) in filteredProjects"
          :key="i"
          @click="openModal(project)"
        >
          <v-sheet height="100%">
            <div
              class="flex items-center justify-center cursor-pointer h-full bg-slate-600 hover:bg-slate-500 transition"
            >
              <div class="text-3xl font-semibold text-white">
                {{ project.title }}
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>

  <Modal :is-open="isModalOpen" :modalCode="modalCode" @close="isModalOpen = false">
    <v-carousel height="700" hide-delimiters progress="primary">
      <v-carousel-item
        v-for="(pl, i) in constants.PROJECT.capture[this.modalContent.code]"
        :key="i"
        @click="openWindow(pl)"
      >
        <v-sheet height="100%">
          <h1 class="text-3xl ml-5 mt-5 mb-5">{{ pl.title }}</h1>
          <div class="d-flex fill-height justify-center align-center cursor-pointer w-4/4 h-4/4">
            <img v-lazy="pl.img" :alt="pl.title" class="w-full h-full" />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </Modal>
</template>

<script>
import Modal from '@/components/sections/directive/common/ModalPopup.vue'

export default {
  name: 'ProjectCard',
  props: {
    device: Boolean
  },
  components: {
    Modal
  },
  computed: {
    filteredProjects() {
      // constants.PROJECT.list를 필터링하여 필터링된 배열 반환
      return this.constants.PROJECT.list.filter((project) => project.isUse)
    }
  },
  data() {
    return {
      isModalOpen: false,
      modalCode: 'N'
    }
  },
  methods: {
    openModal(project) {
      // 모바일 환경에서는 확인 안되도록 처리
      if (this.device) {
        alert('팝업은 PC버전에서 확인 가능합니다.')
        return false
      }

      this.isModalOpen = true
      this.modalContent = project
    },
    openWindow(project) {
      const baseUrl = window.location.origin
      const imgPath = project.img

      const openUrl = baseUrl + imgPath

      window.open(openUrl, '_blank') // 새 창으로 이미지 URL 열기
    }
  },
  inject: ['constants']
}
</script>
