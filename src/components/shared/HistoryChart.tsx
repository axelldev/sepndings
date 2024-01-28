'use client'
import useExpenses from '@/hooks/useExpenses'
import { formatCurrency } from '@/utils/formatters'
import { AreaChart, Flex, Subtitle, Switch, Text } from '@tremor/react'
import { useState } from 'react'

interface ChartOptions {
  mode: 'week' | 'month'
}

export function HistoryChart() {
  const { expenses } = useExpenses()
  const [options, setOptions] = useState<ChartOptions>({
    mode: 'week',
  })
  const subtitle = `Spent this ${options.mode}`

  const handleChangeMode = (checked: boolean) => {
    setOptions({
      ...options,
      mode: checked ? 'month' : 'week',
    })
  }

  return (
    <section className="w-full">
      <Subtitle className="text-center">{subtitle}</Subtitle>
      <Flex justifyContent="end" className="gap-2">
        <Text>Week</Text>
        <Switch
          onChange={handleChangeMode}
          checked={options.mode === 'month'}
        />
        <Text>Month</Text>
      </Flex>
      <AreaChart
        data={expenses ?? []}
        index="category"
        categories={['amount']}
        valueFormatter={formatCurrency}
      />
    </section>
  )
}
