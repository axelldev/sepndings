import { Card, Flex, Metric, Text } from '@tremor/react'
import { ExpensesChart } from './ExpensesChart'

export function TotalsCard() {
  return (
    <Card>
      <Flex className="justify-start gap-8">
        <div>
          <Text>Total Expenses:</Text>
          <Metric>$3,600</Metric>
        </div>
        <div className="w-full">
          <ExpensesChart />
        </div>
      </Flex>
    </Card>
  )
}
