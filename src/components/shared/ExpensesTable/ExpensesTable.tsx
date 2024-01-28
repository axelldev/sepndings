import { Table, TableBody } from '@tremor/react'
import { TableHeader } from './TableHeader'
import { ExpenseRow } from './ExpenseRow'
import useExpenses from '@/hooks/useExpenses'
import { createPortal } from 'react-dom'
import { ExpenseDialog } from '../ExpenseDialog/ExpenseDialog'
import { useExpenseDialog } from '@/hooks/useExpenseDialog'

export function ExpensesTable() {
  const { expenses, handleDelete } = useExpenses()
  const dialog = useExpenseDialog()

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
      {createPortal(<ExpenseDialog />, document.body)}
    </section>
  )
}
