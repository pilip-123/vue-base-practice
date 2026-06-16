<template>
  <div class="detail">
<h2>Student Information</h2>

<p>
  <strong>Name:</strong>
  {{ student.name }}
</p>

<p>
  <strong>Age:</strong>
  {{ student.age }}
</p>

<p>
  <strong>Major</strong>
  {{ student.major }}
</p>

<button @click="emit('close')">Close</button>
  </div>
</template>

<script setup>
defineProps({
  student: Object ,
});

const emit = defineEmits(["close"]);
</script>
