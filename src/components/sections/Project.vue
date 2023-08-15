<template>
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-left mb-8">프로젝트</h2>
    <div class="w-full sm:w-3/3 md:w-2/2 lg:w-3/3 xl:w-4/4 mx-auto">
      <v-carousel
        height="600"
        hide-delimiters
        progress="primary"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            height="100%"
          >
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                {{ slide }} Slide
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        slides: [
          '크로스미디어 광고솔루션',
          'VM사용량 모니터링',
          '호스팅 ERP',
          '자체 쇼핑몰',
          '쇼핑몰 프로모션페이지',
          '쇼핑몰 ERP',
        ],
      }
    }
  }
</script>