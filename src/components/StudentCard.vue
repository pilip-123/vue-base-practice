<template>
 <BaseCard>
 <img :src="student.image" :alt="student.name" />

 <h3>{{ student.name }}</h3>
 <p>{{ student.major }}</p>

 <button @click="viewDetail">View Detail</button>
 <button @click="deleteStudent"> Delete</button>
 </BaseCard>
</template>

<script setup>
import BaseCard from './BaseCard.vue';

const props = defineProps({
  student: Object ,
});

const emit = defineEmits([
  "view-detail",
  "delete-student",
]);

const viewDetail =() =>{
  emit("view-detail", props.student);
}
const deleteStudent = (id) =>{
  // Fallback because your student objects currently don't have `id`
  const key = props.student.id ?? props.student.name
  emit("delete-student", key)
};


</script>
