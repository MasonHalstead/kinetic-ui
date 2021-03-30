import React, { useState, useEffect } from 'react';
import { Table } from 'kinetic-ui';
import { table_headers, data } from './constants';
import { CustomCell, InputCompanyCell, DropdownCountryCell } from './Cells';
import cn from './Tables.module.scss';

const TableBulkEditPage = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(data);
  }, []);

  const setCompany = (value, row) => {
    const new_row = {
      company: value,
      uuid: row.uuid,
    };
    rowManagement(new_row);
  };

  const setCountry = (item, row) => {
    const new_row = {
      country: item.country,
      country_id: item.country_id,
      uuid: row.uuid,
    };
    rowManagement(new_row);
  };

  const rowManagement = (row) => {
    setRows((prev) => {
      const new_data = [...prev];
      const row_index = new_data.findIndex((item) => item.uuid === row.uuid);
      new_data[row_index] = {
        ...new_data[row_index],
        ...row,
      };
      return new_data;
    });
  };
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Table Bulk Edit</h2>
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
        <code>{`import React, { UseEffect, UseState } from 'react'
import { countries } from './constants'
import { Cell, Input, Dropdown } from 'kinetic-ui'

const CustomCell = ({ row, lazy, align }) => (
  <Cell>
    <p style={{ textAlign: align }}>{row[lazy]}</p>
  </Cell>
)

const InputCompanyCell = ({ row, onChange }) => (
    <Cell>
      <Input onChange={(value) => onChange(value, row)} default_value={row.company} transparent />
    </Cell>
  );
  
const DropdownCountryCell = ({ row, onSelect }) => {
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
  
const TablePage = () => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
      setRows(data);
    }, []);
  
    const setCompany = (value, row) => {
      const new_row = {
        company: value,
        uuid: row.uuid,
      };
      rowManagement(new_row);
    };
  
    const setCountry = (item, row) => {
      const new_row = {
        country: item.country,
        country_id: item.country_id,
        uuid: row.uuid,
      };
      rowManagement(new_row);
    };
  
    const rowManagement = (row) => {
      setRows((prev) => {
        const new_data = [...prev];
        const row_index = new_data.findIndex((item) => item.uuid === row.uuid);
        new_data[row_index] = {
          ...new_data[row_index],
          ...row,
        };
        return new_data;
      });
    };
    return (
        <div className={cn.wrapper}>
            <Table headers={table_headers} rows={rows}>
                <InputCompanyCell onChange={setCompany} />
                <CustomCell lazy="currency" align="center" />
                <DropdownCountryCell onSelect={setCountry} />
                <CustomCell lazy="location" align="center" />
            </Table>
        </div>
    )
}
`}</code>
      </pre>
      <div className={cn.wrapper} style={{ display: 'flex' }}>
        <Table headers={table_headers} rows={rows}>
          <InputCompanyCell onChange={setCompany} />
          <CustomCell lazy="currency" align="center" />
          <DropdownCountryCell onSelect={setCountry} />
          <CustomCell lazy="location" align="center" />
        </Table>
      </div>
    </div>
  );
};

export default TableBulkEditPage;
