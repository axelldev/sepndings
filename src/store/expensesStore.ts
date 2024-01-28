import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Expense } from '@/types/expenses.type'

interface ExpensesState {
  expenses: Expense[]
}

interface Actions {
  addExpense: (expnse: Expense) => void
  updateExpense: (expense: Expense) => void
  deleteExpense: (id: string) => void
}

export const expensesInitialState: ExpensesState = {
  expenses: [],
}

export const useExpensesStore = create<ExpensesState & Actions>()(
  persist(
    (set) => ({
      ...expensesInitialState,
      addExpense: (expense) => {
        set((state) => ({ expenses: [...state.expenses, expense] }))
      },
      updateExpense: (expense) => {
        set((state) => ({
          expenses: state.expenses.map((exp) => {
            if (exp.id === expense.id) return expense
            return exp
          }),
        }))
      },
      deleteExpense: (id: string) => {
        set((state) => ({
          expenses: state.expenses.filter((exp) => exp.id !== id),
        }))
      },
    }),
    {
      name: 'expenses-storage',
    }
  )
)

export const selectExpenses = (state: ExpensesState) => state.expenses
