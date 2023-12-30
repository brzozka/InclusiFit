<template>
  <section class="flex flex-col md:flex-row w-full h-full justify-center items-center">
    <img v-if="isImageFirstComputed" :src="imageSrc" :alt="altText" class="md:w-1/2 w-full h-1/2 md:h-full py-2 px-4 rounded-[50px] object-cover" />

    <div class="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">{{ title }}</h1>
      <p class="text-2xl py-6">{{ description }}</p>
      <button class="bg-[#655CFE] hover:bg-[#423ca8] text-white font-bold text-xl py-2 px-4 rounded-full mt-4">{{ btnText }}</button>
    </div>

    <img v-if="!isImageFirstComputed" :src="imageSrc" :alt="altText" class="md:w-1/2 w-full h-1/2 md:h-fit py-2 px-4 rounded-[50px] object-cover" />
  </section>
</template>

<script setup>
import {  computed, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  btnText: String,
  image: String,
  altText: String,
  isImageFirst: Boolean
});

const isMobile = ref(window.innerWidth < 768); 
const isImageFirstComputed = computed(() => isMobile.value ? false : props.isImageFirst);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
  updateIsMobile(); 
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});

const imageSrc = computed(() => {
  return new URL(`../assets/${props.image}`, import.meta.url).href;
});
</script>
