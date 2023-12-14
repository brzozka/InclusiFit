<template>
  <div class="w-1/2 h-full flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">{{ title }}</h1>
    <p class="text-2xl py-6">{{ description }}</p>
    <button class="bg-[#655CFE] hover:bg-[#423ca8] text-white font-bold text-xl py-2 px-4 rounded-full mt-4">{{ btnText }}</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  description: String,
  btnText: String
});
</script>
