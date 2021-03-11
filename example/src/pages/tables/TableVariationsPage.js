import React from 'react';
import { Table, TableFlex } from 'kinetic-ui';
import {
  headers,
  settings_props,
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
const TableVariationsPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Table Settings &amp; Variations</h2>
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
      <div className={cn.header}>
        <h2>Table Scrolling &amp; Striped Rows</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Table, Cell } from 'kinetic-ui'

// quick and dirty cell
const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
)

const settings = {
  rows_striped: true,
};

<div className={cn.wrapper} style={{ display: 'flex', minHeight: 200 }}>
  <Table headers={headers} rows={data} settings={settings}>
    <CustomCell lazy="company" />
    <CustomCell lazy="currency" align="center" />
    <CustomCell lazy="country" />
    <CustomCell lazy="location" align="center" />
  </Table>
</div>`}</code>
      </pre>
      <div className={cn.wrapper} style={{ display: 'flex', minHeight: 200 }}>
        <TableFlex
          headers={table_headers}
          rows={data}
          settings={{ ...settings_flex, submit_text: 'Submit', submit_disabled: false, button_variant: 'secondary' }}
        >
          <CustomCell lazy="company" />
          <CustomCell lazy="currency" align="center" />
          <CustomCell lazy="country" />
          <CustomCell lazy="location" align="center" />
        </TableFlex>
      </div>
      <div className={cn.header}>
        <h2>Table Sticky Rows &amp; Remove Borders</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Table, Cell } from 'kinetic-ui'

// quick and dirty cell
const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
)

const settings = {
  rows_sticky: 2,
  row_borders: false,
};

<div className={cn.wrapper} style={{ display: 'flex', minHeight: 200 }}>
  <Table headers={headers} rows={data} settings={settings}>
    <CustomCell lazy="company" />
    <CustomCell lazy="currency" align="center" />
    <CustomCell lazy="country" />
    <CustomCell lazy="location" align="center" />
  </Table>
</div>`}</code>
      </pre>
      <div className={cn.wrapper} style={{ display: 'flex', minHeight: 200 }}>
        <Table
          headers={table_headers}
          rows={data}
          settings={{ ...settings_sticky, submit_text: 'Submit', submit_disabled: false, button_variant: 'secondary' }}
        >
          <CustomCell lazy="company" />
          <CustomCell lazy="currency" align="center" />
          <CustomCell lazy="country" />
          <CustomCell lazy="location" align="center" />
        </Table>
      </div>
      <div className={cn.header}>
        <h2>Table Fill Rows &amp; Edit Heights</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Table, Cell } from 'kinetic-ui'

// quick and dirty cell
const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
)

const settings = {
  rows_fill: true,
  header_row_height: 30,
  row_height: 32,
};

<div className={cn.wrapper} style={{ display: 'flex', minHeight: 200 }}>
  <Table headers={headers} rows={data} settings={settings}>
    <CustomCell lazy="company" />
    <CustomCell lazy="currency" align="center" />
    <CustomCell lazy="country" />
    <CustomCell lazy="location" align="center" />
  </Table>
</div>`}</code>
      </pre>
      <div className={cn.wrapper} style={{ display: 'flex', minHeight: 200 }}>
        <TableFlex
          headers={table_headers}
          rows={data_sliced}
          settings={{ ...settings_fill, submit_text: 'Submit', submit_disabled: false, button_variant: 'secondary' }}
        >
          <CustomCell lazy="company" />
          <CustomCell lazy="currency" align="center" />
          <CustomCell lazy="country" />
          <CustomCell lazy="location" align="center" />
        </TableFlex>
      </div>
      <div className={cn.header}>
        <h2>Table Remove Row Hover &amp; Remove Headers</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Table, Cell } from 'kinetic-ui'

// quick and dirty cell
const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
)

const settings = {
  row_highlight: false,
  headers_show: false,
};

<div className={cn.wrapper} style={{ display: 'flex' }}>
  <Table headers={headers} rows={data} settings={settings}>
    <CustomCell lazy="company" />
    <CustomCell lazy="currency" align="center" />
    <CustomCell lazy="country" />
    <CustomCell lazy="location" align="center" />
  </Table>
</div>`}</code>
      </pre>
      <div className={cn.wrapper} style={{ display: 'flex' }}>
        <Table
          headers={table_headers}
          rows={data_sliced}
          settings={{
            ...settings_highlights,
            submit_text: 'Submit',
            submit_disabled: true,
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
        <h2>Settings Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={settings_props} settings={{ rows_flex: true }}>
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

export default TableVariationsPage;
