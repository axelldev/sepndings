import React, { useState } from 'react'
import {
  Flex,
  TextInput,
  Select,
  SelectItem,
  Button,
  NumberInput,
} from '@tremor/react'
import { AddIcon } from '../icons/AddIcon'
import { Category, Expense } from '../../types/expenses.type'
import { AvailableCategories } from '../../types/constants'
import useExpenses from '../../hooks/useExpenses'
import { useExpenseDialog } from '@/hooks/useExpenseDialog'
import { ExpenseDialog } from './ExpenseDialog/ExpenseDialog'
import { createPortal } from 'react-dom'
import { validateExpenseForm } from '@/validators'

export function ExpensesForm() {
  const [category, setCategory] = useState<Category | null>(null)
  const { createExpense } = useExpenses()
  const dialog = useExpenseDialog()

  const handleChangeCategory = (value: string) => {
    setCategory(value as Category)
  }

  const handleSave = (expense: Expense) => {
    createExpense(expense)
    dialog.handleClose()
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    if (!validateExpenseForm(data)) return
    createExpense({
      id: crypto.randomUUID(),
      description: data.description as string,
      amount: parseFloat(data.amount as string),
      category: data.category as Category,
      date: new Date(),
    })
    event.currentTarget.reset()
    setCategory(null)
    dialog.handleClose()
  }

  const handleOpenDialog = () => dialog.handleOpen()

  return (
    <div>
      <div className="block md:hidden my-4">
        <Button
          className="w-full"
          type="submit"
          icon={AddIcon}
          onClick={handleOpenDialog}
        >
          Add
        </Button>
      </div>
      <form className="hidden md:block" onSubmit={handleSubmit}>
        <Flex className="gap-2 w-full p-2">
          <TextInput name="description" placeholder="Shopping ..." required />
          <NumberInput name="amount" placeholder="Amount" min={0} required />
          <Select
            placeholder="Category"
            onValueChange={handleChangeCategory}
            defaultValue=""
          >
            {Object.entries(AvailableCategories).map(([key, val]) => (
              <SelectItem key={key} value={key}>
                {val}
              </SelectItem>
            ))}
          </Select>
          {category && (
            <input
              type="text"
              className="hidden"
              name="category"
              defaultValue={category}
            />
          )}
          <Button type="submit" icon={AddIcon}>
            Add
          </Button>
        </Flex>
      </form>
      {createPortal(
        <ExpenseDialog
          open={dialog.open}
          onClose={dialog.handleClose}
          onSave={handleSave}
        />,
        document.body
      )}
    </div>
  )
}
