<template>
  <div>
    <StudentCard
      v-for="student in props.students"
      :key="student.id ?? student.name"
      :student="student"
      @view-detail="emit('view-detail', student)"
      @delete-student="emit('delete-student', student.id ?? student.name)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import StudentCard from "./StudentCard.vue";

const props = defineProps({
  students: Array,
});

const emit = defineEmits(["view-detail", "delete-student"]);
</script>


