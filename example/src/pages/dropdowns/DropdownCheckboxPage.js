import React, { useState } from 'react';
import { DropdownCheckbox, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, options, dropdown_rows } from './constants';
import cn from './Dropdowns.module.scss';

const DropdownCheckboxPage = () => {
  const [select_options, onSelect] = useState([...options]);
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Dropdown Checkbox</h2>
      </div>
      <div className={cn.block}>
        <p>
          Dropdowns have an internal state and are controlled by the component itself. Passing the default_value prop to
          a dropdown will set the selected option on the initial render. The component will also try and find the
          corresponding key using the option_key prop to highlight the selected option when open.
        </p>
        <p>
          The uuid key is required on the option object when passing options into the dropdown. We recommend using the{' '}
          <a href="https://www.npmjs.com/package/uuid" rel="noopener noreferrer" target="_blank">
            uuid package from npm
          </a>
          .
        </p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { options } from './options'
import { Dropdown } from 'kinetic-ui'

// options basic example
const options = [
  {
    name: 'Option 1',
    uuid: 1 // required key
  },
];

// options example
const options_custom = [
  {
    select: 'Option 1',
    uuid: 1 // required key
  },
];

<div className={cn.wrapper}>
  <Dropdown label="Default Value" options={options} default_value="render default value" />
  <Dropdown label="Left Icon" left_icon={['fas', 'coins']} options={options} margin="0px 10px 0px 10px" />
  <Dropdown label="Right Icon" options={options} right_icon={['fas', 'coins']} />
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
        <Table headers={headers} rows={dropdown_rows} settings={{ rows_flex: true }}>
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
