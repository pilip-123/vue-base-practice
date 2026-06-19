<template>
  <nav class="bg-gray-800 p-4">
    <router-link to="/" class="text-white mx-3">
      Home
    </router-link>

    <router-link to="/about" class="text-white mx-3">
      About
    </router-link>

    <router-link to="/projects" class="text-white mx-3">
      Projects
    </router-link>
  </nav>
</template>

<style>
.router-link-active {
  color: yellow;
  font-weight: bold;
}
</style>