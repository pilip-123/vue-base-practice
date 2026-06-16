<script setup>
defineProps({
  totalExpenses: Number,
  balance: Number,
  savingsGoal: Number
})
</script>

<template>
  <div class="mt-8 border-t pt-4 space-y-2">
    <p class="text-lg">
      Total Expenses: ${{ totalExpenses }}
    </p>

    <p
      class="text-xl font-bold"
      :class="
        balance >= savingsGoal
          ? 'text-green-600'
          : 'text-red-600'
      "
    >
      Balance: ${{ balance }}
    </p>
  </div>
</template>