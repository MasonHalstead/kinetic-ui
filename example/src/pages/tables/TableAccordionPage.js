import React from 'react';
import { TableAccordion, Table } from 'kinetic-ui';
import { table_headers, data } from './constants';
import { CustomCell } from './Cells';
import cn from './Tables.module.scss';

const TableAccordionPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Table Accordion</h2>
      </div>
      <div className={cn.block}>
        <p>
          Table functionality includes sorting, filtering, keywords, bulk editing and much more all controlled through a
          few props. The in-depth break down of each prop can be viewed inside the accordion table menu.
        </p>
        <p>
          To display a basic table you will need to pass down headers, rows and table children (cells). Each table child
          represents one column that will match the header. Every child gets passed a variety of props to help you
          display the correct object keys. The uuid key is required on each header object and each row object. We
          recommend using the{' '}
          <a href="https://www.npmjs.com/package/uuid" rel="noopener noreferrer" target="_blank">
            uuid package from npm
          </a>
          .
        </p>
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

export default TableAccordionPage;
