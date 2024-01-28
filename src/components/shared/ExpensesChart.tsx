import useExpenses from '../../hooks/useExpenses'
import { DonutChart } from '@tremor/react'

export function ExpensesChart() {
  const { expenses } = useExpenses()

  const groupedExpenses = () => {
    if (!expenses) return []
    // return expenses.map(())
  }

  return <DonutChart data={expenses ?? []} index="category" category="amount" />
}
