<template>
  <div class="relative w-full h-screen">
    <div class="flex h-auto flex-col w-[70vw] font-sans mx-auto">
      <NavBar></NavBar>
    </div>
    <div class="flex flex-col w-[70vw] mx-auto bg-white items-center justify-center flex-grow">
      <div class="flex flex-col text-3xl font-bold text-[#655CFE] py-20">
        Fitness Facilities and their Accessibility near You
      </div>
      <div id="map" class="w-full flex-grow"></div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>
