import { Table, TableBody } from '@tremor/react'
import { TableHeader } from './TableHeader'
import { ExpenseRow } from './ExpenseRow'
import useExpenses from '@/hooks/useExpenses'
import { createPortal } from 'react-dom'
import { ExpenseDialog } from '../ExpenseDialog/ExpenseDialog'
import { useExpenseDialog } from '@/hooks/useExpenseDialog'
import { Expense } from '@/types/expenses.type'

export function ExpensesTable() {
  const { expenses, handleDelete, updateExpense } = useExpenses()
  const dialog = useExpenseDialog()

  const handleSave = (expense: Expense) => {
    updateExpense(expense)
    dialog.handleClose()
  }

  return (
    <section className="w-full">
      <Table>
        <TableHeader />
        <TableBody>
          {expenses.map((expense) => (
            <ExpenseRow
              key={expense.id}
              expense={expense}
              onEdit={() => dialog.handleOpen(expense)}
              onDelete={() => handleDelete(expense.id)}
            />
          ))}
        </TableBody>
      </Table>
      {createPortal(
        <ExpenseDialog
          open={dialog.open}
          expense={dialog.expense}
          onClose={dialog.handleClose}
          onSave={handleSave}
        />,
        document.body
      )}
    </section>
  )
}
