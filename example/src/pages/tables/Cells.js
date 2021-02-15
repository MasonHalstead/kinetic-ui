import React from 'react';
import { Cell } from 'kinetic-ui';

export const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
);
