import { useMemo } from 'react'
import { selectExpenses, useExpensesStore } from '../store/expensesStore'
import { Expense } from '../types/expenses.type'

export default function useExpenses() {
  const expenses = useExpensesStore(selectExpenses)
  const addExpense = useExpensesStore((state) => state.addExpense)
  const updateExpense = useExpensesStore((state) => state.updateExpense)
  const deleteExpense = useExpensesStore((state) => state.deleteExpense)

  const createExpense = (expense: Expense) => {
    addExpense(expense)
  }

  const totalExpenses = useMemo(
    () => expenses.reduce((acc, expense) => acc + expense.amount, 0),
    [expenses]
  )
  const totalByCategory = useMemo(() => {
    const groupedExpenses: {
      [key: string]: number
    } = {}

    expenses.forEach((expenses) => {
      const category = expenses.category
      if (groupedExpenses[category]) {
        groupedExpenses[category] += expenses.amount
        return
      }
      groupedExpenses[category] = expenses.amount
    })

    return Object.entries(groupedExpenses).map(([cat, amount]) => ({
      category: cat,
      amount: amount,
    }))
  }, [expenses])

  const handleDelete = (id: string) => deleteExpense(id)

  return {
    expenses,
    totalExpenses,
    totalByCategory,
    createExpense,
    updateExpense,
    handleDelete,
  }
}
