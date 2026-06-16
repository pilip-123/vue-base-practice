<script setup>
import BudgetForm from './components/BugetForm.vue'
import ExpenseList from './components/ExpenseList.vue'
import SummaryCard from './components/SummaryCard.vue'

import { useBudget } from './composables/useBudget'

const {
  budget,
  filter,
  addExpense,
  deleteExpense,
  totalExpenses,
  balance,
  filteredExpenses
} = useBudget()
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-lg">

      <h1 class="mb-6 text-center text-3xl font-bold">
        Personal Budget Tracker
      </h1>

      <BudgetForm
        :budget="budget"
        @add-expense="addExpense"
      />

      <ExpenseList
        :expenses="filteredExpenses"
        :filter="filter"
        :delete-expense="deleteExpense"
        @update:filter="filter = $event"
      />

      <SummaryCard
        :total-expenses="totalExpenses"
        :balance="balance"
        :savings-goal="budget.savingsGoal"
      />

    </div>
  </div>
</template>