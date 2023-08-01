<template>
    <div class="bg-white rounded-lg shadow-md p-4 w-64 mx-auto mb-4">
      <img :src="icon" :alt="name" class="w-12 h-12 mb-4 mx-auto" />
      <h3 class="text-lg font-bold text-gray-800 mb-2">{{ name }}</h3>
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      description: String,
      icon: String,
    },
  };
  </script>
  
  <style>
  /* Optional: You can add custom styles here */
  </style>