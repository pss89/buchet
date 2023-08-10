<template>
    <div :class="{ 'fixed inset-0 flex items-center justify-center z-10': isOpen }" v-if="isOpen">
        <div class="fixed inset-0 bg-black opacity-70"></div>
        <div class="bg-white rounded-lg shadow-md p-4 opacity-100 z-50 w-full sm:w-3/4 md:w-3/4 lg:w-4/4 h-auto">
            <slot></slot>
            <div class="flex float-right">
                <button @click="closeModal" class="mt-4 bg-lime-300 hover:bg-lime-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2">
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