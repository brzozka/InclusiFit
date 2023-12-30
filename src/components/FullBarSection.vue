<script setup>
defineProps({
  title: String,
  subtitle1: String,
  subtitle2: String
});
</script>

<template>
  <div class="flex h-[30vh] md:h-[15vh] w-full bg-[#655CFE]">
    <div class="flex flex-col md:flex-row h-full md:w-[70vw] items-center justify-center px-4 py-8 md:py-0 mx-auto">
      <h1 class="text-3xl font-bold tracking-tight text-white w-full md:w-auto mb-4 md:mb-0">{{ title }}</h1>
      <div class="flex flex-row w-full md:w-auto justify-between md:justify-start md:gap-4">
        <p class="text-xl text-white">{{ subtitle1 }}</p>
        <p class="text-xl text-white">{{ subtitle2 }}</p>
      </div>
    </div>
  </div>
</template>