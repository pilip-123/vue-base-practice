<script setup>
defineProps({
  expenses: Array,
  filter: Object,
  deleteExpense: Function
})

const emit = defineEmits(['update:filter'])
</script>

<template>
  <div class="mt-6">

    <div class="mb-4 flex gap-3">
      <button
        @click="emit('update:filter', 'all')"
        class="rounded bg-gray-200 px-4 py-2"
      >
        All
      </button>

      <button
        @click="emit('update:filter', 'over')"
        class="rounded bg-orange-200 px-4 py-2"
      >
        Over $50
      </button>

      <button
        @click="emit('update:filter', 'under')"
        class="rounded bg-green-200 px-4 py-2"
      >
        Under $50
      </button>
    </div>

    <ul class="space-y-3">
      <li
        v-for="(expense, index) in expenses"
        :key="index"
        class="flex items-center justify-between rounded-lg bg-gray-50 p-4"
      >
        <span>
          {{ expense.description }} - ${{ expense.amount }}
        </span>

        <button
          @click="deleteExpense(index)"
          class="rounded bg-red-500 px-3 py-1 text-white"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>