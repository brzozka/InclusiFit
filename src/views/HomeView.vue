<template>
    <div class="flex h-fit flex-col w-full">
      <div class="flex h-fit flex-col w-[70vw] font-sans mx-auto"><Navbar></Navbar></div>
      
      <div class="flex h-[80vh] w-[70vw] mx-auto bg-white items-center justify-center">
        <HeroSection 
          title="Inclusive Fitness for Diverse Abilities"
          description="Unleashing fitness resources for people with diverse needs, offering tailored exercises and mapping accessible gyms."
          btnText="Get Started"
        />
        <div class="w-1/2 h-full flex flex-col justify-center items-center">
      <img src="../assets/exercise.png" alt="People exercising" class="w-fit h-fit py-2 px-4 rounded-[50px]">
    </div>
      </div>
      
      <FooterSection 
        title="Making fitness accessible for everyone's needs."
        subtitle1="Personalized exercises for Individual needs"
        subtitle2="Accessible Gyms in Your Location"
      />
      <div class="flex h-[80vh] w-[70vw] mx-auto bg-white items-center justify-center">
        <HeroSection 
          title="Tailored Exercises Suited to Specific Disabilities"
          description="We provide exercises adapted to suit specific disabilities, enabling users to pursue their fitness journey with ease."
          btnText="Explore Exercises"
        />
        <div class="w-1/2 h-full flex flex-col justify-center items-center">
      <img src="../assets/exercise.png" alt="People exercising" class="w-fit h-fit py-2 px-4 rounded-[50px]">
    </div>
      </div>
      <div class="flex h-[80vh] w-[70vw] mx-auto bg-white items-center justify-center">
        <div class="w-1/2 h-full flex flex-col justify-center items-center">
      <img src="../assets/exercise.png" alt="People exercising" class="w-fit h-fit py-2 px-4 rounded-[50px]">
    </div>
        <HeroSection 
          title="Accessible Gym Locator in Your Vicinity"
          description="Locate gyms nearby that prioritize accessibility, making it easier for you to continue your fitness journey."
          btnText="Find Gyms"
        />
        
      </div>
  
    
    </div>
  </template>
  
  <script setup>
  import Navbar from '../components/Navbar.vue'
  import HeroSection from '../components/HeroSection.vue'
  import FooterSection from '../components/FooterSection.vue'
  </script>
  