import React from 'react'
import { Cell } from 'kinetic-ui'

export const CustomCell = ({ row, lazy }) => (
  <Cell>
    <p>{row[lazy]}</p>
  </Cell>
)
