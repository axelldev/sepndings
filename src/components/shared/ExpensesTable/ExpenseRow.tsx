import { DeleteIcon } from '@/components/icons/DeleteIcon'
import { EditIcon } from '@/components/icons/EditIcon'
import { Expense } from '@/types/expenses.type'
import { getAmountBadgeColor } from '@/utils/badges'
import { formatCurrency, formatDate } from '@/utils/formatters'
import { TableRow, TableCell, Badge, Flex, Button } from '@tremor/react'

interface ExpenseRowProps {
  expense: Expense
  onEdit?: () => void
  onDelete?: () => void
}

export function ExpenseRow({ expense, onEdit, onDelete }: ExpenseRowProps) {
  return (
    <TableRow>
      <TableCell>{expense.description}</TableCell>
      <TableCell>
        <Badge color={getAmountBadgeColor(expense.amount)}>
          {formatCurrency(expense.amount)}
        </Badge>
      </TableCell>
      <TableCell>{formatDate(new Date())}</TableCell>
      <TableCell>{expense.category}</TableCell>
      <TableCell>
        <Flex className="gap-4 justify-end">
          <Button tooltip="Edit" color="gray" variant="light" onClick={onEdit}>
            <EditIcon />
          </Button>
          <Button
            tooltip="Delete"
            color="red"
            variant="light"
            onClick={onDelete}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </TableCell>
    </TableRow>
  )
}
