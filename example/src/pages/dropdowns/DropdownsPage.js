import React, { useState } from 'react';
import { Dropdown, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, options, dropdown_rows } from './constants';
import cn from './Dropdowns.module.scss';

const DropdownsPage = () => {
  const [option, setOption] = useState({
    name: 'Option 1',
  });
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Dropdowns</h2>
      </div>
      <div className={cn.block}>
        <p>
          Dropdowns have an internal state and are controlled by the component itself. Passing the default_value prop to
          a dropdown will set the selected option on the initial render. The component will also try and find the
          corresponding key using the option_key prop to highlight the selected option when open.
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
        <Dropdown label="Uncontrolled" options={options} default_value="Option 1" />
        <Dropdown label="Left Icon" left_icon={['fas', 'coins']} options={options} margin="0px 10px 0px 10px" />
        <Dropdown label="Right Icon" options={options} right_icon={['fas', 'coins']} />
      </div>
      <div className={cn.header}>
        <h2>Dropdowns Controlled</h2>
      </div>
      <div className={cn.block}>
        <p>
          Setting the value prop will change the dropdown to a controlled component. Select an option from the dropdown
          to see the other dropdown options update.
        </p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React, { useState } from 'react'
import { options } from './options'
import { Dropdown } from 'kinetic-ui'

const Form = () => {
  const [option, setOption] = useState({ name: 'Option 1' });
  return <>
    <Dropdown label="Controlled" onSelect={setOption} options={options} value={option.name} />
    <Dropdown label="Controlled" onSelect={setOption} options={options} value={option.name} margin="0px 10px 0px 10px" />
    <Dropdown label="Controlled" onSelect={setOption} options={options} value={option.name} />
  </>
}`}</code>
      </pre>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Dropdown label="Controlled" onSelect={setOption} options={options} value={option.name} />
        <Dropdown
          label="Controlled"
          onSelect={setOption}
          options={options}
          margin="0px 10px 0px 10px"
          value={option.name}
        />
        <Dropdown label="Controlled" onSelect={setOption} options={options} value={option.name} />
      </div>
      <div className={cn.header}>
        <h2>Dropdowns More</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { options } from './options'
import { Dropdown } from 'kinetic-ui'

<div className={cn.wrapper}>
  <Dropdown label="Disabled" options={options} disabled />
  <Dropdown label="Placeholder" placeholder="select options..." options={options} margin="0px 10px 0px 10px" />
  <Dropdown label="Nullable" options={options} error_message="remove item" default_value="Option 1" nullable />
</div>
<div className={cn.wrapper}>
  <Dropdown label="Background #ebeeff" options={options} background="#ebeeff" />
  <Dropdown label="Text Align" options={options} text_align="center" margin="0px 10px 0px 10px" />
  <Dropdown label="Scroll Height" options={options} scroll_height={50} />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Dropdown label="Disabled" options={options} disabled />
        <Dropdown label="Placeholder" placeholder="select options..." options={options} margin="0px 10px 0px 10px" />
        <Dropdown label="Nullable" options={options} error_message="remove item" default_value="Option 1" nullable />
      </div>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Dropdown label="Background #ebeeff" options={options} background="#ebeeff" />
        <Dropdown label="Text Align" options={options} text_align="center" margin="0px 10px 0px 10px" />
        <Dropdown label="Scroll Height" options={options} scroll_height={50} />
      </div>
      <div className={cn.header}>
        <h2>Dropdown Props</h2>
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

export default DropdownsPage;
