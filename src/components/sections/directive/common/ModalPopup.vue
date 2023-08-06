<template>
    <div class="fixed inset-0 flex items-center justify-center z-10" v-if="isOpen">
        <div class="fixed inset-0 bg-black opacity-70"></div>
        <div class="bg-white rounded-lg shadow-md p-4 opacity-100 z-50">
            <slot></slot>
            <button @click="closeModal">Close</button>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        isOpen: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>