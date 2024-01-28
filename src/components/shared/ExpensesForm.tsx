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
import { Category } from '../../types/expenses.type'
import { AvailableCategories } from '../../types/constants'
import useExpenses from '../../hooks/useExpenses'

export function ExpensesForm() {
  const [category, setCategory] = useState<Category | null>(null)
  const { createExpense } = useExpenses()

  const handleChangeCategory = (value: string) => {
    setCategory(value as Category)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    if (
      !data.description ||
      typeof data.description !== 'string' ||
      !data.description.trim()
    )
      return
    if (!data.amount || typeof data.amount !== 'string' || !data.amount.trim())
      return
    if (!category) return
    createExpense({
      id: crypto.randomUUID(),
      description: data.description,
      amount: parseFloat(data.amount),
      category: category,
      date: new Date(),
    })
    event.currentTarget.reset()
    setCategory(null)
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <Button type="submit" icon={AddIcon}>
          Add
        </Button>
      </Flex>
    </form>
  )
}
