import React, { useState } from 'react';
import { Dropdown, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, options, dropdown_rows } from './constants';
import cn from './Dropdowns.module.scss';

const DropdownsPage = () => {
  const [option, setOption] = useState({
    name: 'Option 1',
  });
  const [null_option, setNullable] = useState({
    name: 'Option 1',
  });
  const selectControlNullable = (o) => {
    if (o) {
      return setOption(o);
    }
    setOption({});
  };
  const selectNullable = (o) => {
    if (o) {
      return setNullable(o);
    }
    setNullable({});
  };
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
        <Dropdown label="Uncontrolled" options={options} default_value="Option 1" controlled={false} />
        <Dropdown
          label="Uncontrolled Left Icon"
          left_icon={['fas', 'coins']}
          default_value="Option 2"
          options={options}
          margin="0px 10px 0px 10px"
          controlled={false}
        />
        <Dropdown
          label="Uncontrolled Right Icon"
          options={options}
          default_value="Option 3"
          right_icon={['fas', 'coins']}
          controlled={false}
        />
      </div>
      <div className={cn.wrapperFlex}>
        <Dropdown
          label="Uncontrolled Nullable"
          options={options}
          default_value="Option 1"
          nullable
          controlled={false}
        />
        <Dropdown
          label="Uncontrolled Left Icon"
          left_icon={['fas', 'coins']}
          default_value="Option 2"
          options={options}
          margin="0px 10px 0px 10px"
          controlled={false}
        />
        <Dropdown
          label="Uncontrolled Right Icon"
          options={options}
          default_value="Option 3"
          right_icon={['fas', 'coins']}
          controlled={false}
        />
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
        <Dropdown label="Controlled" onSelect={setOption} options={options} value={option.name} controlled />
        <Dropdown
          label="Controlled Null"
          onSelect={() => setOption({ name: null, id: null })}
          options={[{ name: 'Null', id: 100, uuid: 100 }]}
          margin="0px 10px 0px 10px"
          value={option.name}
        />
        <Dropdown
          label="Controlled Nullable"
          onSelect={selectControlNullable}
          options={options}
          value={option.name}
          nullable
        />
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
        <Dropdown
          label="Controlled Nullable"
          options={options}
          onSelect={selectNullable}
          error_message="remove item"
          value={null_option.name}
          controlled
          nullable
        />
      </div>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Dropdown label="Background #ebeeff" background="#ebeeff" />
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
