<script setup>
const props = defineProps({
  movie: Object,
});
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold text-gray-900">Overview</h2>
    <p class="mt-2 text-sm leading-relaxed text-gray-700">
      {{ movie?.overview }}
    </p>
  </div>
</template>

