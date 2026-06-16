<!-- <template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div class="mx-auto max-w-6xl px-4 py-8">
      <header class="mb-6">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Student Directory
        </h1>
        <p class="mt-1 text-sm text-gray-600">
          Total students: <span class="font-semibold text-gray-900">{{ students.length }}</span>
        </p>
      </header>

      <StudentList
        :students="filteredStudents"
        :searchQuery="searchQuery"
        @update:searchQuery="searchQuery = $event"
        :favorites="favorites"
        @toggle-favorite="toggleFavorite"
        @view-detail="showDetail"
        @delete-student="deleteStudent"
      />

      <StudentDetail
        v-if="selectedStudent"
        :student="selectedStudent"
        @close="closeDetail"
      />
    </div>
  </div>
</template> -->

<!-- <script setup>
import { computed, ref } from "vue";
import StudentList from "./components/StudentList.vue";
import StudentDetail from "./components/StudentDetail.vue";

const students = ref([
  {
    id: 1,
    name: "chavy yom",
    age: 15,
    major: "English Trainer",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "rida yom",
    age: 18,
    major: "English Trainer",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "pilip yom",
    age: 20,
    major: "Web Developer",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "sara yom",
    age: 12,
    major: "Khmer Trainer",
    image: "https://i.pravatar.cc/150?img=4",
  },
]);

const searchQuery = ref("");

const favorites = ref([]); // array of student ids

const filteredStudents = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return students.value;

  return students.value.filter((s) => {
    return (
      s.name.toLowerCase().includes(q) ||
      s.major.toLowerCase().includes(q)
    );
  });
});

const selectedStudent = ref(null);

const showDetail = (student) => {
  selectedStudent.value = student;
};

const closeDetail = () => {
  selectedStudent.value = null;
};

const toggleFavorite = (studentId) => {
  const idx = favorites.value.indexOf(studentId);
  if (idx >= 0) favorites.value.splice(idx, 1);
  else favorites.value.push(studentId);
};

const deleteStudent = (id) => {
  students.value = students.value.filter((student) => student.id !== id);

  favorites.value = favorites.value.filter((studentId) => studentId !== id);

  if (selectedStudent.value?.id === id) {
    selectedStudent.value = null;
  }
};
</script> -->

<template>
<div class="container w-1/2 h-32 mt-4 flex gap-4 m-auto">
   <!-- product 1  -->
  <ProductCard :isLiked="true">
  <template #badge>
<span class="bg-green-500 text-white px-2 py-1 rounded">New</span>
  </template>

  <template #default="{liked}">
    <h2 class="text-xl font-bold">iPhone 17</h2>
    <p>Latest Apple smartphone.</p>
  <span v-if="liked">hart</span>
  </template>

  <template #actions>
    <button class="bg-blue-500 text-white px-3 py-1 rounded">Add to card</button>
    <button class="bg-gray-500 text-white px-3 py-1 rounded">Whishlist</button>
  </template>

  </ProductCard>

  <!-- Product 2  -->
   <ProductCard :isLiked="false">
    <template #badge>
      <span class="bg-red-500 text-white px-2 py-1 rounded">Sale</span>
    </template>

    <template #default="{liked}">
      <h2 class="text-xl font-bold">MacBook Pro</h2>
      <p>Powerful laptop for developer.</p>
      <span v-if="liked">Hard</span>
    </template>

    <template #actions>
    <button class="bg-blue-500 text-white px-3 py-1 rounded">Add to card</button>
    <button class="bg-gray-500 text-white px-3 py-1 rounded">Whishlist</button>
  </template>

   </ProductCard>

     <!-- Product 3 -->
  <ProductCard :isLiked="true">

    <template #badge>
      <span class="bg-purple-500 text-white px-2 py-1 rounded">
        HOT
      </span>
    </template>

    <template #default="{ liked }">
      <h2 class="text-xl font-bold">
        AirPods Pro
      </h2>

      <p>Wireless earbuds with noise cancellation.</p>

      <span v-if="liked">Hard</span>
    </template>

    <template #actions>
      <button class="bg-blue-500 text-white px-3 py-1 rounded">
        Add to Cart
      </button>

      <button class="bg-gray-500 text-white px-3 py-1 rounded">
        Wishlist
      </button>
    </template>

  </ProductCard>
</div>
</template>

<script setup>
import ProductCard from './components/Practices/ProductCard.vue';
</script>
