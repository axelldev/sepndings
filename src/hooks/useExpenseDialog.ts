import { useExpenseDialogStore } from '@/store/expenseDialogStore'

export function useExpenseDialog() {
  const open = useExpenseDialogStore((state) => state.open)
  const expense = useExpenseDialogStore((state) => state.expense)
  const handleClose = useExpenseDialogStore((state) => state.closeExpenseDialog)
  const handleOpen = useExpenseDialogStore((state) => state.openExpenseDialog)

  return {
    open,
    expense,
    handleOpen,
    handleClose,
  }
}
