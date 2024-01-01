<template>
  <main class="flex flex-col w-full text-primary bg-primary border-primary">
    <NavBar/>

    <SectionLayout >
      <HeroSection 
        title="Inclusive Fitness for Diverse Abilities"
        description="Unleashing fitness resources for people with diverse needs, offering tailored exercises and mapping accessible gyms."
        btnText="Get Started"
        image="exercise.png"  
        altText="Group fitness class"
      />
    </SectionLayout>

    <FullBarSection
      title="Making fitness accessible for everyone's needs."
      subtitle1="Personalized exercises for Individual needs"
      subtitle2="Accessible Gyms in Your Location"
    />

    <SectionLayout>
      <HeroSection 
        title="Tailored Exercises Suited to Specific Disabilities"
        description="We provide exercises adapted to suit specific disabilities, enabling users to pursue their fitness journey with ease."
        btnText="Explore Exercises"
        image="tailored.png"  
        altText="Tailored exercises for disabilities"
      />
    </SectionLayout>

    <SectionLayout>
      <HeroSection 
        title="Accessible Gym Locator in Your Vicinity"
        description="Locate gyms nearby that prioritize accessibility, making it easier for you to continue your fitness journey."
        btnText="Find Gyms"
        image="map.png" 
        altText="Map showing gym locations"
        isImageFirst
      />
    </SectionLayout>
  </main>
</template>

<script setup>
import NavBar from '../components/NavBarComponent.vue'
import HeroSection from '../components/HeroSection.vue'
import FullBarSection from '../components/FullBarSection.vue'
import SectionLayout from '../components/SectionLayout.vue'
</script>
