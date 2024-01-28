export function getAmountBadgeColor(amount: number) {
  if (amount > 999) {
    return 'red'
  } else if (amount > 499) {
    return 'yellow'
  }

  return 'blue'
}
