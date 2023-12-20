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
import L from 'leaflet';
import { onMounted, onBeforeUnmount } from 'vue';

let map;

onMounted(() => {
  map = L.map('map').setView([51.21006, 16.1619], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
});

onBeforeUnmount(() => {
  if (map && map.remove) {
    map.remove();
  }
});
</script>

<style>
#map {
  height: 600px; 
}
</style>

