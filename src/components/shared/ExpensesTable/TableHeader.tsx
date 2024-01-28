import { TableHead, TableHeaderCell, TableRow } from '@tremor/react'

export function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell>Amount</TableHeaderCell>
        <TableHeaderCell>Date</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
      </TableRow>
    </TableHead>
  )
}
