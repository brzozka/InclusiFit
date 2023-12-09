<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
    <div class="flex h-fit flex-col w-full">
    <div class="flex h-fit flex-col w-[80vw] font-sans mx-auto  "><Navbar></Navbar></div>
        <div class="flex  h-[80vh] w-[80vw] mx-auto bg-emerald-200"><p class="font-mono">first</p></div>
        <div class="flex  h-[15vh] w-full  bg-violet-300">second</div>

        <div class="flex w-[80vw] h-[80vh] mx-auto bg-slate-300">third</div>
    
</div>
</template>
