<template>
  <BaseCard>
    <div class="relative">
      <img
        class="h-40 w-full rounded-xl object-cover"
        :src="student.image"
        :alt="student.name"
      />

      <button
        type="button"
        class="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-gray-200 transition hover:bg-white"
        :aria-pressed="isFavorite"
        :title="isFavorite ? 'Unstar' : 'Star'"
        @click="$emit('toggle-favorite', student.id)"
      >
        <span class="text-xl leading-none" :class="isFavorite ? 'text-yellow-400' : 'text-gray-300'">
          ★
        </span>
      </button>
    </div>

    <div class="mt-4">
      <h3 class="text-lg font-semibold text-gray-900">{{ student.name }}</h3>
      <p class="mt-1 text-sm text-gray-600">{{ student.major }}</p>

      <div class="mt-3 flex items-center justify-between">
        <span class="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          Age {{ student.age }}
        </span>

        <span class="text-xs text-gray-400">ID: {{ student.id }}</span>
      </div>

      <div class="mt-4 flex gap-2">
        <button
          type="button"
          class="flex-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
          @click="$emit('view-detail', student)"
        >
          View Detail
        </button>

        <button
          type="button"
          class="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 shadow-sm transition hover:bg-red-100"
          @click="$emit('delete-student', student.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from "./BaseCard.vue";

const props = defineProps({
  student: Object,
  isFavorite: Boolean,
});

defineEmits(["view-detail", "delete-student", "toggle-favorite"]);
</script>

