export function formatCurrency(value: number) {
  return `$ ${new Intl.NumberFormat('mx').format(value)}`
}

export function formatDate(value: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
  }
  return new Intl.DateTimeFormat('mx', options).format(value)
}
