<template>
  <section class="flex flex-col md:flex-row w-full h-full justify-center items-center bg-primary ">
    <img v-if="isImageFirstComputed" :src="image" :alt="altText" class="md:w-1/2 w-full h-1/2 md:h-full py-2 px-4 rounded-[50px] object-cover" />

    <div class="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl text-yellow">{{ title }}</h1>
      <p class="text-2xl py-6">{{ description }}</p>
      <router-link :to="buttonRoute" class="bg-[#655CFE] hover:bg-[#423ca8] bg-yellow  hover:text-b hover:bg-yellow text-white font-bold text-xl py-2 px-4 rounded-full mt-4 inline-block text-center">
        {{ btnText }}
      </router-link>
    </div>

    <img v-if="!isImageFirstComputed" :src="image" :alt="altText" class="md:w-1/2 w-full h-1/2 md:h-fit py-2 px-4 rounded-[50px] object-cover" />
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  btnText: String,
  buttonRoute: String,
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



</script>
