<script setup>
import { ref } from 'vue'

defineProps({
  budget: Object
})

const emit = defineEmits(['add-expense'])

const desc = ref('')
const amount = ref(0)

function submit() {
  emit('add-expense', { description: desc.value, amount: amount.value })
  desc.value = ''
  amount.value = 0
}
</script>


<template>
  <div class="space-y-4">
    <div>
      <label class="mb-2 block font-medium">
        Monthly Income
      </label>

      <input
        v-model.number="budget.income"
        type="number"
        class="w-full rounded-lg border p-3"
      >
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <input
        v-model="desc"
        placeholder="Expense description"
        class="rounded-lg border p-3"
      >

      <input
        v-model.number="amount"
        type="number"
        placeholder="Amount"
        class="rounded-lg border p-3"
      >
    </div>

    <button
      @click="submit"
      class="rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
    >
      Add Expense
    </button>
  </div>
</template>