import { Badge, Card, Flex, Metric, Text } from '@tremor/react'
import { ExpensesChart } from './ExpensesChart'
import useExpenses from '@/hooks/useExpenses'
import { formatCurrency } from '@/utils/formatters'

export function TotalsCard() {
  const { totalExpenses, totalByCategory } = useExpenses()

  return (
    <Card>
      <div className="flex flex-col items-center md:flex-row gap-4 md:gap-8">
        <div>
          <Text>Total Expenses:</Text>
          <Metric>{formatCurrency(totalExpenses)}</Metric>
        </div>
        <div className="flex-1">
          <ExpensesChart />
        </div>
        <div className="block md:hidden">
          <Flex
            flexDirection="col"
            justifyContent="start"
            alignItems="center"
            className="gap-3"
          >
            {totalByCategory.map((item) => (
              <Badge key={item.category}>
                {item.category.toUpperCase()}: {formatCurrency(item.amount)}
              </Badge>
            ))}
          </Flex>
        </div>
      </div>
    </Card>
  )
}
