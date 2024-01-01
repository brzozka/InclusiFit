<script setup>
defineProps({
  title: String,
  subtitle1: String,
  subtitle2: String
});
</script>

<template>
  <section class="flex h-[30vh] md:h-[15vh] w-full bg-[#655CFE] bg-yellow ">
    <div class="flex flex-col md:flex-row h-full md:w-[70vw] items-center justify-center px-4 py-8 md:py-0 mx-auto">
      <h2 class="text-3xl font-bold tracking-tight text-white w-full md:w-auto mb-4 md:mb-0 text-b">{{ title }}</h2>
      <div class="flex flex-row w-full md:w-auto justify-between md:justify-start md:gap-4">
        <p class="text-xl text-white text-b">{{ subtitle1 }}</p>
        <p class="text-xl text-white text-b">{{ subtitle2 }}</p>
      </div>
    </div>
  </section>
</template>