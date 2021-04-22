import React, { useState } from 'react';
import { DropdownCheckbox, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, options, checkbox_rows } from './constants';
import cn from './Dropdowns.module.scss';

const DropdownCheckboxPage = () => {
  const [select_options, onSelect] = useState([...options]);
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Dropdown Checkbox</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { options } from './options'
import { DropdownCheckbox } from 'kinetic-ui'

const [select_options, onSelect] = useState([...options]);

<div className={cn.wrapper}>
    <DropdownCheckbox 
        label="Dropdown Checkbox" 
        options={select_options} 
        onSelect={onSelect} 
    />
    <DropdownCheckbox
        label="Dropdown Checkbox Highlight"
        options={select_options}
        onSelect={onSelect}
        highlight={false}
        margin="0px 10px 0px 10px"
    />
    <DropdownCheckbox
        label="Dropdown Checkbox Native"
        options={select_options}
        onSelect={onSelect}
        native={false}
    />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex}>
        <DropdownCheckbox label="Dropdown Checkbox" options={select_options} onSelect={onSelect} />
        <DropdownCheckbox
          label="Dropdown Checkbox Highlight"
          options={select_options}
          onSelect={onSelect}
          highlight={false}
          margin="0px 10px 0px 10px"
        />
        <DropdownCheckbox
          label="Dropdown Checkbox Native"
          options={select_options}
          onSelect={onSelect}
          native={false}
        />
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={checkbox_rows} settings={{ rows_flex: true }}>
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

export default DropdownCheckboxPage;
