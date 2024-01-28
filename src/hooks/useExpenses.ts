import { selectExpenses, useExpensesStore } from '../store/expensesStore'
import { Expense } from '../types/expenses.type'

export default function useExpenses() {
  const expenses = useExpensesStore(selectExpenses)
  const addExpense = useExpensesStore((state) => state.addExpense)
  const deleteExpense = useExpensesStore((state) => state.deleteExpense)

  const createExpense = (expense: Expense) => {
    addExpense(expense)
  }

  const handleDelete = (id: string) => deleteExpense(id)

  return {
    expenses,
    createExpense,
    handleDelete,
  }
}
