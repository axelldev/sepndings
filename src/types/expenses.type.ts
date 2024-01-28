import { AvailableCategories } from './constants'

export type Category = keyof typeof AvailableCategories

export interface Expense {
  id: string
  amount: number
  date: Date
  description: string
  category: Category
}
