<template>
  <div>
    <h1>Student Directory</h1>

    <StudentList
      :students="students"
      @view-detail="showDetail"
      @delete-student="deleteStudent"
    />

    <StudentDetail
      v-if="selectedStudent"
      :student="selectedStudent"
      @close="closeDetail"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StudentList from "./components/StudentList.vue";
import StudentDetail from './components/StudentDetail.vue';

const students = ref([
  {
    name: "chavy yom",
    age: 22 ,
    major: "English Trainer",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "rida yom",
    age: 25 ,
    major: "Busines women",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "pilip yom",
    age: 28 ,
    major: "Web Developer",
    image: "https://i.pravatar.cc/150?img=4",

  },
  {
    name: "sara yom",
    age: 18 ,
    major: "Doctor internship",
    image: "https://i.pravatar.cc/150?img=3",
  },
]);

const selectedStudent = ref(null);

const showDetail = (student) => {
  selectedStudent.value = student
}

const closeDetail = () => {
  selectedStudent.value = null
}

const deleteStudent = (key) => {
  students.value = students.value.filter(
    (s) => (s.id ?? s.name) !== key
  )

  if ((selectedStudent.value?.id ?? selectedStudent.value?.name) === key) {
    selectedStudent.value = null
  }
}

</script>
