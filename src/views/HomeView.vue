<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
    <div class="flex h-fit flex-col w-full">
    <div class="flex h-fit flex-col w-[70vw] font-sans mx-auto  "><Navbar></Navbar></div>
        <div class="flex h-[80vh] w-[70vw] mx-auto bg-white items-center justify-center">
            <div class="w-1/2 h-full flex flex-col justify-center items-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">Inclusive Fitness for Diverse Abilities</h1>
                <p class="text-2xl">Unleashing fitness resources for people with diverse needs, offering tailored exercises and mapping accessible gyms.</p>
                <button class="bg-violet-500 hover:bg-violet-700 text-white font-bold text-xl py-2 px-4 rounded-full mt-4">Get Started</button>
            </div>
            <div class="w-1/2 h-full flex flex-col justify-center items-center ">
                <img src="../assets/exercise.jfif" alt="exercise" class="w-fit h-fit py-2 px-4 rounded-[50px]">
            </div>
        </div>
        <div class="flex  h-[15vh] w-full  bg-[#655CFE]">
            <div class="flex h-fit  w-[70vw] font-sans mx-auto items-center">
                <h1 class="text-3xl font-bold tracking-tight text-white">Making fitness accessible for everyone's needs.</h1>
            </div>
        </div>

        <div class="flex w-[70vw] h-[80vh] mx-auto bg-slate-300">third</div>
    
</div>
</template>
