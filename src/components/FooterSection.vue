<template>
    <div class="flex h-[15vh] w-full bg-[#655CFE]">
      <div class="flex h-fit w-[70vw] font-sans mx-auto items-center justify-between py-8 px-4">
        <h1 class="text-3xl font-bold tracking-tight text-white">{{ title }}</h1>
        <p class="text-xl text-white">{{ subtitle1 }}</p>
        <p class="text-xl text-white">{{ subtitle2 }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      subtitle1: String,
      subtitle2: String
    }
  }
  </script>
  