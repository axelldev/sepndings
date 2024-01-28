import { formatCurrency } from '@/utils/formatters'
import useExpenses from '../../hooks/useExpenses'
import { DonutChart } from '@tremor/react'

export function ExpensesChart() {
  const { totalByCategory } = useExpenses()

  const valueFormatter = (value: number) => formatCurrency(value)
  return (
    <DonutChart
      valueFormatter={valueFormatter}
      data={totalByCategory}
      index="category"
      category="amount"
    />
  )
}
