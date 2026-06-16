<template>
  <section class="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
      <div class="flex-1">
        <label class="mb-1 block text-sm font-medium text-gray-700" for="search">
          Search students
        </label>
        <input
          id="search"
          type="text"
          class="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          placeholder="Search by name or major..."
          :value="searchQuery"
          @input="$emit('update:searchQuery', ($event.target).value)"
        />
      </div>

      <div class="text-sm text-gray-600 sm:text-right">
        Showing <span class="font-semibold text-gray-900">{{ students.length }}</span>
        result(s)
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
        :is-favorite="favorites.includes(student.id)"
        @view-detail="handleViewDetail"
        @delete-student="handleDeleteStudent"
        @toggle-favorite="handleToggleFavorite"
      />
    </div>

    <div
      v-if="students.length === 0"
      class="mt-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-10 text-center"
    >
      <p class="text-sm text-gray-600">No students match your search.</p>
    </div>
  </section>
</template>

<script setup>
import StudentCard from "./StudentCard.vue";

defineProps({
  students: Array,
  searchQuery: String,
  favorites: Array,
});

const emit = defineEmits([
  "view-detail",
  "delete-student",
  "toggle-favorite",
  "update:searchQuery",
]);

const handleViewDetail = (student) => {
  emit("view-detail", student);
};

const handleDeleteStudent = (id) => {
  emit("delete-student", id);
};

const handleToggleFavorite = (studentId) => {
  emit("toggle-favorite", studentId);
};
</script>

