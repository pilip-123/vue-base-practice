<template>
  <div class=" bg-green-500 w-1/2 h-40 flex flex-col  items-center justify-center text-center m-auto mt-4 rounded-[8px] gap-4">
    <h1 class="font-bold text-white text-2xl">Projects</h1>
    <ul class="flex justify-center items-center text-center gap-4">
      <li>
        <router-link to="/projects/1" class="text-black-500 font-bold">Portfolio Website</router-link>
      </li>
      <li>
        <router-link to="/projects/2" class="text-red-500 font-bold">Student Management System</router-link>
      </li>
      <li>
        <router-link to="/projects/3" class="text-white font-bold">E-Commerce Store</router-link>
      </li>
    </ul>
  </div>
</template>