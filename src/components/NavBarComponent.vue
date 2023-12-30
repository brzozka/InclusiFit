<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="w-full md:w-[70vw] bg-white mx-auto">
    <nav class="mx-auto flex justify-between items-center p-3">
      <router-link to="/" class="text-4xl font-bold md:px-6 py-3">InclusiFit</router-link>
      
      <div class="md:hidden">
        <button @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- Links for large screens -->
      <div class="hidden md:flex text-3xl font-semibold px-7">
        <router-link to="/Map" class="px-3 hover:text-[#655CFE]">Map</router-link>
        <router-link to="/Exercise" class="px-6 hover:text-[#655CFE]">Exercises</router-link>
      </div>

      
    </nav>
    <!-- Links for mobile, hidden by default -->
    <div class="top-full right-0 bg-white shadow-md p-3 md:hidden text-4xl" v-show="isMenuOpen">
        <router-link to="/Map" class="block  px-3 hover:text-[#655CFE]">Map</router-link>
        <router-link to="/Exercise" class="block  px-3 py-4 hover:text-[#655CFE]">Exercises</router-link>
      </div>
  </header>
</template>


