import React from 'react';
import { countries } from './constants';
import { Cell, Input, Dropdown } from 'kinetic-ui';

export const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
);

export const InputCompanyCell = ({ row, onChange }) => (
  <Cell>
    <Input onChange={(value) => onChange(value, row)} default_value={row.company} transparent />
  </Cell>
);

export const DropdownCountryCell = ({ row, onSelect }) => {
  return (
    <Cell>
      <Dropdown
        onSelect={(item) => onSelect(item, row)}
        options={countries}
        option_key="country"
        default_value={row.country}
        transparent
      />
    </Cell>
  );
};
