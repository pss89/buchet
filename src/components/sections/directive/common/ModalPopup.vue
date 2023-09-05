<template>
  <div :class="{ 'fixed inset-0 flex items-center justify-center z-10': isOpen }" v-if="isOpen">
    <div class="fixed inset-0 bg-black opacity-70"></div>
      <div class="bg-white rounded-lg shadow-md p-4 opacity-100 z-50 w-full sm:w-3/4 md:w-3/4 lg:w-4/4 h-auto">
        <slot></slot>
        <div class="flex float-right">
            <button v-if="modalCode" @click="copyToClipboard" class="mt-4 bg-lime-300 hover:bg-lime-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2">
                Copy
            </button>
            <button @click="closeModal" class="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
                Close
            </button>
        </div>
    </div>
  </div>
</template>
  
<script>
// npm install copy-to-clipboard --save
import copy from 'copy-to-clipboard';

export default {
  props: {
      isOpen: Boolean,
      modalCode: String,
  },
  data() {
      return {
      };
  },
  mounted() {
      // keyup 에 대한 처리
      document.body.addEventListener('keyup', e => {
          // 팝업이 열려있다면 아래 경우 실행
          if (this.isOpen) {
              // esc 키 클릭 시 팝업 닫기
              if (e.key === 'Escape') {
                  this.$emit('close');
              }
          }
      })
  },
  methods: {
      closeModal() {
          this.$emit('close');
      },
      copyToClipboard() {
          const codeToCopy = this.modalCode;

          if (copy(codeToCopy)) {
              alert('코드가 클립보드에 복사되었습니다.');
          } else {
              alert('코드 복사 중 오류가 발생했습니다.');
          }
      }
  }
};
</script>