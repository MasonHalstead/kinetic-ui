import React from 'react';
import { TableAccordion, Table } from 'kinetic-ui';
import { table_headers, data } from './constants';
import { CustomCell } from './Cells';
import cn from './Tables.module.scss';

const TablesPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Table Accordion</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { TableAccordion, Cell } from 'kinetic-ui'

// quick and dirty cell
const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
)

// headers basic example
const headers = [{
  name: 'Company',
  width: '200px',
  flex_grow: 1,
  uuid: 1, // required key
}]

// rows basic example
const rows = [{
  company: 'Magnis Dis Parturient Ltd',
  currency: '$57.12',
  country: 'Samoa',
  location: '-70.60207, 98.41223',
  headers: [{
    name: 'Company',
    width: '200px',
    flex_grow: 1,
    uuid: 1, // required key
  }],
  rows: [{
    company: 'Magnis Dis Parturient Ltd',
    currency: '$57.12',
    country: 'Samoa',
    location: '-70.60207, 98.41223',
    uuid: 1, // required key
  }],
  uuid: 1, // required key
}]

<div className={cn.wrapper}>
  <TableAccordion
    headers={headers}
    rows={data}
    footer={footer}
    accordion={({ row }) => {
      return (
        <Table headers={row.headers} rows={row.rows}>
          <CustomCell lazy="company" />
          <CustomCell lazy="currency" align="center" />
          <CustomCell lazy="country" />
          <CustomCell lazy="location" align="center" />
        </Table>
      );
    }}
  >
    <CustomCell lazy="company" />
    <CustomCell lazy="currency" align="center" />
    <CustomCell lazy="country" />
    <CustomCell lazy="location" align="center" />
  </TableAccordion>
</div>`}</code>
      </pre>
      <div className={cn.wrapper}>
        <TableAccordion
          headers={table_headers}
          rows={data}
          footer={{
            submit_text: 'Submit',
            submit_disabled: false,
          }}
          accordion={({ row }) => {
            return (
              <Table headers={row.headers} rows={row.rows}>
                <CustomCell lazy="company" />
                <CustomCell lazy="currency" align="center" />
                <CustomCell lazy="country" />
                <CustomCell lazy="location" align="center" />
              </Table>
            );
          }}
        >
          <CustomCell lazy="company" />
          <CustomCell lazy="currency" align="center" />
          <CustomCell lazy="country" />
          <CustomCell lazy="location" align="center" />
        </TableAccordion>
      </div>
    </div>
  );
};

export default TablesPage;
