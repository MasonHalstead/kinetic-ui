import React from 'react';
import { Table } from 'kinetic-ui';
import {
  headers,
  table_props,
  settings_props,
  footer_props,
  table_headers,
  settings_flex,
  settings_sticky,
  settings_fill,
  data,
  settings_highlights,
} from './constants';
import { CustomCell } from './Cells';
import cn from './Tables.module.scss';

const data_sliced = data.slice(0, 3);
const TableBasicsPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Table Basic</h2>
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
import { Table, Cell } from 'kinetic-ui'

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
  uuid: 10, // required key
}]

const footer = {
  submit_text: 'Submit',
  submit_disabled: false,
  button_variant: 'secondary'
}

// quick and dirty cell
const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
)

<div className={cn.wrapper}>
  <Table headers={headers} rows={rows} footer={footer}>
    <CustomCell lazy="company" />
    <CustomCell lazy="currency" align="center" />
    <CustomCell lazy="country" />
    <CustomCell lazy="location" align="center" />
  </Table>
</div>`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Table
          headers={table_headers}
          rows={data}
          footer={{
            submit_text: 'Submit',
            submit_disabled: false,
            button_variant: 'secondary',
          }}
        >
          <CustomCell lazy="company" />
          <CustomCell lazy="currency" align="center" />
          <CustomCell lazy="country" />
          <CustomCell lazy="location" align="center" />
        </Table>
      </div>
      <div className={cn.header}>
        <h2>Table Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={table_props} settings={{ rows_flex: true }}>
          <CustomCell lazy="name" />
          <CustomCell lazy="type" />
          <CustomCell lazy="default" />
          <CustomCell lazy="options" />
          <CustomCell lazy="description" />
        </Table>
      </div>
    </div>
  );
};

export default TableBasicsPage;
