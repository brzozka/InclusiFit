<template>
  <header class="w-full md:w-[70vw]  mx-auto sticky top-0 z-50  bg-white text-primary bg-primary ">
    <nav class="mx-auto flex justify-between items-center p-3" role="navigation">
      <router-link to="/" class="text-4xl font-bold md:px-6 py-3">InclusiFit</router-link>
      <button
  @click="toggleHighContrast"
  class="p-2  text-xl md:text-3xl font-semibold   focus:outline-none hover-yellow  hover:text-[#655CFE]"
  :aria-pressed="isHighContrast.toString()"
>
  High Contrast
</button>
      <div class="md:hidden">
        <button @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
     
      <!-- Links for large screens -->
      <div class="hidden md:flex text-3xl font-semibold px-7">
        <router-link to="/Map" class="px-3 hover-yellow hover:text-[#655CFE]">Map</router-link>
        <router-link to="/Exercise" class="px-6 hover-yellow hover:text-[#655CFE]">Exercises</router-link>
      </div>
      
      

      
    </nav>
    <!-- Links for mobile, hidden by default -->
    <div class="top-full right-0 bg-white shadow-md p-3 md:hidden text-4xl" v-show="isMenuOpen">
        <router-link to="/Map" class="block  px-3 hover:text-[#655CFE]">Map</router-link>
        <router-link to="/Exercise" class="block  px-3 py-4 hover:text-[#655CFE]">Exercises</router-link>
      </div>

  </header>
</template>
<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const isHighContrast = ref(false);

function toggleHighContrast() {
  isHighContrast.value = !isHighContrast.value;
  if (isHighContrast.value) {
    document.documentElement.classList.add('high-contrast');
  } else {
    document.documentElement.classList.remove('high-contrast');
  }
}
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


