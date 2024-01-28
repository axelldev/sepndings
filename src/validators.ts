// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateExpenseForm(data: any): boolean {
  if (!data.amount || !data.category || !data.description?.trim()) return false
  if (isNaN(parseInt(data.amount))) return false
  return true
}
