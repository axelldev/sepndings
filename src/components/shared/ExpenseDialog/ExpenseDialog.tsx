import { useExpenseDialog } from '@/hooks/useExpenseDialog'
import {
  Dialog,
  DialogPanel,
  NumberInput,
  Text,
  TextInput,
  Title,
} from '@tremor/react'
import { SelectCategory } from '../SelectCategory'

export function ExpenseDialog() {
  const { open, expense, handleClose } = useExpenseDialog()
  const title = expense ? 'Edit Expense' : 'Create Expense'

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogPanel className="min-h-[350px]">
        <Title>{title}</Title>
        <section>
          <form action="#">
            <div className="flex flex-col gap-4">
              <SelectCategory
                defaultValue={expense?.category ?? ''}
                onChange={(value) => console.log(value)}
              />
              <TextInput defaultValue={expense?.description} />
              <NumberInput defaultValue={expense?.amount} />
              <Text>Date: {expense?.date.toString()}</Text>
            </div>
          </form>
        </section>
      </DialogPanel>
    </Dialog>
  )
}
