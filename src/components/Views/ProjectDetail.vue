<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = {
  1: {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Vue.js.'
  },
  2: {
    title: 'Student Management System',
    description: 'An application for managing student records.'
  },
  3: {
    title: 'E-Commerce Store',
    description: 'An online shopping platform with product listings.'
  }
}

const Project = projects[route.params.id]
</script>

<template>
  <div class="bg-teal-500 w-1/2 h-40 flex flex-col items-center justify-center m-auto mt-4 rounded-[8px] gap-4">
    <h1 class="text-white font-bold text-xl">{{ Project?.title}}</h1>
    <p class="text-black font-bold">{{ Project?.description }}</p>

    <router-link to="/projects" class="w-40 h-10 bg-blue-500 rounded-[8px] mt-2 flex justify-center items-center text-center  text-white font-bold">
      Back to Projects
    </router-link>
  </div>
</template>