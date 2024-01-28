import { Expense } from '@/types/expenses.type'
import { useState } from 'react'

export function useExpenseDialog() {
  const [open, setOpen] = useState(false)
  const [expense, setExpense] = useState<Expense | null>(null)
  const handleClose = () => {
    setOpen(false)
    setExpense(null)
  }
  const handleOpen = (expense?: Expense) => {
    setOpen(true)
    if (expense) {
      setExpense(expense)
    }
  }

  return {
    open,
    expense,
    handleOpen,
    handleClose,
  }
}
