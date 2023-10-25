<template>
  <div class="dark:bg-slate-700 rounded-lg shadow-md p-4 w-64 mx-auto mb-4" :class="{ 'cursor-pointer': isComplete }" @click="openModal">
    <img v-lazy="icon" :alt="name" class="w-12 h-12 mb-4 mx-auto" @click="openModal"/>
    <h3 class="text-lg font-bold text-white mb-2">{{ name }}</h3>
    <p class="text-sm text-white break-words" v-html="formattedDescription"></p>
  </div>
</template>
  
<script>
export default {
  props: {
    name: String,
    description: String,
    icon: String,
    isComplete: Boolean
  },
  computed: {
    formattedDescription(){
      return this.description.replace(/\n/g, '<br>');
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal', { name: this.name, description: this.description, icon: this.icon });
    }
  }
};
</script>
  
<style>
/* Optional: You can add custom styles here */
</style>