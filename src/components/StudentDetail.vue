<script setup>
defineProps({
  student: Object,
});

const emit = defineEmits(["close"]);
</script>

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
      <strong>Major:</strong>
      {{ student.major }}
    </p>

    <button @click="emit('close')">Close</button>
  </div>
</template>

<style scoped>
.detail {
  border: 1px solid #000;
  padding: 20px;
  margin-top: 20px;
}
</style>
