import {
  Button,
  Dialog,
  DialogPanel,
  NumberInput,
  Text,
  TextInput,
  Title,
} from '@tremor/react'
import { SelectCategory } from '../SelectCategory'
import { Category, type Expense } from '@/types/expenses.type'
import { useEffect, useState } from 'react'
import { validateExpenseForm } from '@/validators'

interface Props {
  open: boolean
  expense?: Expense | null
  onClose: () => void
  onSave: (expense: Expense) => void
}

interface FormValues {
  category?: Category | null
  description: string
  amount: string
}

const initialFormValues: FormValues = {
  category: null,
  description: '',
  amount: '0',
}

export function ExpenseDialog({ open, expense, onClose, onSave }: Props) {
  const [form, setForm] = useState<FormValues>({
    category: expense?.category,
    description: expense?.description ?? '',
    amount: expense?.amount.toString() ?? '',
  })

  useEffect(() => {
    setForm({
      category: expense?.category,
      description: expense?.description ?? '',
      amount: expense?.amount.toString() ?? '',
    })
  }, [expense])

  const title = expense ? 'Edit Expense' : 'Create Expense'

  const handleClose = () => {
    setForm(initialFormValues)
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleChangeCategory = (value: Category) => {
    setForm((prev) => ({
      ...prev,
      category: value as Category,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateExpenseForm(form)) return
    if (expense) {
      onSave({
        ...expense!,
        description: form.description,
        category: form.category!,
        amount: parseInt(form.amount),
      })
      return
    }

    onSave({
      id: crypto.randomUUID(),
      description: form.description,
      category: form.category!,
      amount: parseInt(form.amount),
      date: new Date(),
    })
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogPanel className="min-h-[350px]">
        <Title>{title}</Title>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <SelectCategory
                defaultValue={expense?.category ?? ''}
                onChange={handleChangeCategory}
              />
              <TextInput
                name="description"
                value={form.description}
                onChange={handleChange}
              />
              <NumberInput
                name="amount"
                value={form.amount}
                onChange={handleChange}
              />
              {expense && <Text>Date: {expense?.date.toString()}</Text>}
            </div>
            <Button className="w-full my-4">Save</Button>
          </form>
        </section>
      </DialogPanel>
    </Dialog>
  )
}
