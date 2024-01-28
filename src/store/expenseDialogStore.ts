import { Expense } from '@/types/expenses.type'
import { create } from 'zustand'

type Mode = 'create' | 'edit'

interface State {
  open: boolean
  mode: Mode
  expense?: Expense
}

interface Actions {
  openExpenseDialog: (expense?: Expense) => void
  closeExpenseDialog: () => void
}

export const useExpenseDialogStore = create<State & Actions>((set) => ({
  open: false,
  mode: 'create',
  openExpenseDialog: (expense) => {
    set({
      open: true,
      expense,
    })
  },
  closeExpenseDialog: () => {
    set({
      open: false,
    })
  },
}))
