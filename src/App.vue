<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div
      v-if="cardShow"
      class="w-80 bg-white border shadow-md rounded-lg overflow-hidden"
    >
      <img
        :src="student.image"
        :alt="student.name"
        class="w-full h-48 object-cover"
      />

      <div class="p-4">
        <h3 class="text-xl font-bold">{{ student.name }}</h3>

        <p class="mt-2">
          Age: <strong>{{ student.age }}</strong>
        </p>

        <p>
          Major: <strong>{{ student.major }}</strong>
        </p>

        <div class="flex gap-2 mt-4">
          <button
            @click="showDetail = !showDetail"
            class="flex-1 bg-orange-500 py-2 rounded-lg text-white cursor-pointer hover:bg-orange-600"
          >
            {{ showDetail ? "Hide Details" : "View Details" }}
          </button>

          <button
            @click="deleteStudent"
            class="flex-1 bg-red-500 py-2 rounded-lg text-white cursor-pointer hover:bg-red-600"
          >
            Delete
          </button>
        </div>

        <div v-if="showDetail" class="mt-4 pt-4 border-t">
          <p><strong>Email:</strong> {{ student.email }}</p>
          <p><strong>Phone:</strong> {{ student.phone }}</p>
          <p><strong>Address:</strong> {{ student.address }}</p>
        </div>
      </div>
    </div>

    <p v-else class="text-xl text-red-500 font-semibold">
      Student card has been deleted.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"

const cardShow = ref(true)
const showDetail = ref(false)

const student = {
  name: "Pilip Yom",
  major: "Information Technology",
  age: 22,
  email: "pilip@example.com",
  phone: "+855 12 345 678",
  address: "Phnom Penh, Cambodia",
  image: "https://i.pravatar.cc/300?img=5"
}

const deleteStudent = () => {
  showCard.value = false
}
</script>