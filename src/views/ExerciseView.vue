<template>
    <main class="relative w-full h-screen bg-primary">
      <div class="flex h-fit flex-col w-full lg:w-[70vw] font-sans mx-auto">
        <NavBar />
      </div>
      <section aria-labelledby="exercise-title" class="flex flex-col w-full bg-primary  mx-auto bg-white items-center justify-center flex-grow">
        <h2 id="exercises-title" class="flex flex-col text-4xl text-yellow font-bold text-[#655CFE] py-20 px-2">
          Discover Exercises Tailored to Your Needs
        </h2>
        <div class="p-4 text-3xl w-full md:w-[70vw]">
          <input type="text" v-model="searchTerm" placeholder="Search by tags..." class="p-2 border border-[#655CFE]  border-yellow rounded-lg w-full bg-primary " aria-label="Search exercises by tags"/>
          <div class="flex flex-wrap mt-2">
            <button v-for="tag in uniqueTags" :key="tag" @click="filterByTag(tag)" class="bg-[#655CFE] bg-yellow hover-bg-yellow hover:bg-[#201d50] text-white text-b rounded-full px-3 py-1 text-lg font-semibold mr-2 mb-2">
              {{ tag }}
            </button>
          </div>
        </div>
        <ExercisesComponent :exercises="filteredExercises" />
      </section>
    </main>
  </template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import NavBar from '../components/NavBarComponent.vue';
import ExercisesComponent from '../components/ExercisesComponent.vue';
import { fetchExercises } from '../services/firebaseService';

const allExercises = ref([]);
const searchTerm = ref('');

onMounted(async () => {
  allExercises.value = await fetchExercises();
});

const uniqueTags = computed(() => {
  const tags = new Set();
  allExercises.value.forEach(exercise => {
    exercise.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
});

const filterByTag = (tag) => {
  searchTerm.value = tag;
};

const filteredExercises = computed(() => {
  const searchLower = searchTerm.value.toLowerCase();
  return allExercises.value.filter(exercise =>
    exercise.tags.some(tag => tag.toLowerCase().includes(searchLower))
  );
});
</script>
  