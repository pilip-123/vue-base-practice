import { ref, reactive, computed } from 'vue'

export function useBudget() {
  const newDesc = ref('')
  const newAmount = ref(0)
  const filter = ref('all')

  const budget = reactive({
    income: 3000,
    savingsGoal: 500,
    expenses: []
  })

  function addExpense({ description, amount }) {
    if (!description.trim() || Number(amount) <= 0) return

    budget.expenses.push({
      description,
      amount: Number(amount)
    })
  }

  function deleteExpense(index) {
    budget.expenses.splice(index, 1)
  }

  const totalExpenses = computed(() => {
    return budget.expenses.reduce(
      (sum, item) => sum + item.amount,
      0
    )
  })

  const balance = computed(() => {
    return budget.income - totalExpenses.value
  })

  const filteredExpenses = computed(() => {
    switch (filter.value) {
      case 'over':
        return budget.expenses.filter(item => item.amount > 50)

      case 'under':
        return budget.expenses.filter(item => item.amount <= 50)

      default:
        return budget.expenses
    }
  })

  return {
    budget,
    filter,
    addExpense,
    deleteExpense,
    totalExpenses,
    balance,
    filteredExpenses
  }
}