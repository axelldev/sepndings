import { AvailableCategories } from '@/types/constants'
import { Category } from '@/types/expenses.type'
import { Select, SelectItem } from '@tremor/react'
import { useState } from 'react'

interface Props {
  onChange: (category: Category) => void
  defaultValue: string
}

export function SelectCategory({ defaultValue, onChange }: Props) {
  const [category, setCategory] = useState<string>(defaultValue)

  const handleChangeCategory = (value: string) => {
    setCategory(value as Category)
    onChange(value as Category)
  }

  return (
    <Select
      placeholder="Category"
      onValueChange={handleChangeCategory}
      value={category}
    >
      {Object.entries(AvailableCategories).map(([key, val]) => (
        <SelectItem key={key} value={key}>
          {val}
        </SelectItem>
      ))}
    </Select>
  )
}
