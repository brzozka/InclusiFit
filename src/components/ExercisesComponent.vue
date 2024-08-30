<template>
  <section class="flex flex-wrap justify-center" role="list">
    <article
      v-for="exercise in filteredExercises"
      :key="exercise.name"
      role="listitem"
      class="bg-white bg-primary rounded-lg shadow-lg m-4 p-4 w-full md:w-1/2 lg:w-1/3"
    >
      <h3 class="text-3xl font-bold text-yellow text-[#655CFE]">{{ exercise.name }}</h3>
      <p class="text-gray-700 text-primary text-xl mt-2">{{ exercise.description }}</p>
      <div class="flex flex-wrap mt-2 mb-4">
        <span
          v-for="tag in exercise.tags"
          :key="tag"
          class="bg-[#655CFE] bg-yellow text-white text-b text-lg rounded-full px-3 py-1 font-semibold mr-2 mb-2"
          >{{ tag }}</span
        >
      </div>
      <iframe
        :src="exercise.videoUrl"
        title="Exercise Video"
        frameborder="0"
        allowfullscreen
        class="w-full h-56"
      ></iframe>
    </article>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  exercises: Array,
  searchTerm: String
})

const filteredExercises = computed(() => {
  if (!props.searchTerm || props.searchTerm === '') {
    return props.exercises
  }
  return props.exercises.filter((exercise) =>
    exercise.tags.some((tag) => tag.toLowerCase().includes(props.searchTerm.toLowerCase()))
  )
})
</script>
