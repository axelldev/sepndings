import { Flex } from '@tremor/react'
import { ExpensesForm } from './components/shared/ExpensesForm'
import { Header } from './components/shared/Header'
import { TotalsCard } from './components/shared/TotalsCard'
import { ExpensesTable } from './components/shared/ExpensesTable/ExpensesTable'

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-8">
        <TotalsCard />
        <ExpensesForm />
        <Flex>
          <ExpensesTable />
        </Flex>
      </main>
    </>
  )
}
