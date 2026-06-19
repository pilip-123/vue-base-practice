<script setup>
const props = defineProps({
  movie: Object,
});
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold text-gray-900">Cast</h2>
    <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
      <li v-for="member in movie?.cast" :key="member">{{ member }}</li>
    </ul>
  </div>
</template>

