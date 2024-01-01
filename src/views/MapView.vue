<template>
  <main class="relative w-full h-screen bg-primary">
    <div class="flex h-fit flex-col w-full lg:w-[70vw] font-sans mx-auto"><NavBar></NavBar></div>
    <section aria-labelledby="map-title" class="flex flex-col w-[70vw] mx-auto bg-primary bg-white items-center justify-center flex-grow">
      <h2 id="map-title" class="flex flex-col text-3xl font-bold text-yellow text-[#655CFE] py-20">
        Fitness Facilities and their Accessibility near You
      </h2>
      <div role="application" id="map" class="w-full flex-grow"></div>
    </section>
  </main>
</template>

<script setup>
import NavBar from '../components/NavBarComponent.vue'
import L from 'leaflet';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { fetchGyms } from '../services/firebaseService'; // Adjust the path as needed

const map = ref(null);
const gyms = ref([]);

onMounted(async () => {
  map.value = L.map('map').setView([51.21006, 16.1619], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value);

  // Fetch gyms and create markers
  gyms.value = await fetchGyms();
  gyms.value.forEach(gym => {
  const popupContent = `
    <div class="p-2 bg-white bg-primary rounded-lg shadow-lg">
      <h5 class="text-3xl text-center font-bold text-yellow text-[#655CFE]">${gym.name}</h5>
      <p class="text-lg text-primary text-gray-700">${gym.address}</p>
      <p class="text-lg text-primary text-gray-600">${gym.accessibility_desc}</p>
      <a href="${gym.website}" target="_blank" class="text-xl text-yellow text-[#655CFE]">${gym.website}</a>
    </div>
  `;

  const marker = L.marker([gym.latitude, gym.longitude]).addTo(map.value);
  marker.bindPopup(popupContent);
});

});

onBeforeUnmount(() => {
  if (map.value && map.value.remove) {
    map.value.remove();
  }
});
</script>

<style>
#map {
  height: 600px;
}
</style>
