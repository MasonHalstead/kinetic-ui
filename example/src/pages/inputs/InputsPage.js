import React, { useState } from 'react';
import { Input, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, input_rows } from './constants';
import cn from './Inputs.module.scss';

const InputsPage = () => {
  const [value, setValue] = useState('value');
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Inputs</h2>
      </div>
      <div className={cn.block}>
        <p>
          Inputs have an internal state and are controlled by the component itself. It is recommended to use debounce
          with an uncontrolled Input so that the onChange event doesnt fire on every keystroke.
        </p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Input } from 'kinetic-ui'

<div className={cn.wrapper}>
  <Input label="Uncontrolled" default_value="default value" />
  <Input label="Left Icon" left_icon={['fas', 'coins']} margin="0px 10px 0px 10px" />
  <Input label="Right Icon" right_icon={['fas', 'coins']} />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex}>
        <Input label="Uncontrolled" debounce={1000} onChange={(value) => alert(value)} default_value="default value" />
        <Input label="Left Icon" left_icon={['fas', 'coins']} margin="0px 10px 0px 10px" />
        <Input label="Right Icon" right_icon={['fas', 'coins']} />
      </div>
      <div className={cn.header}>
        <h2>Inputs Controlled</h2>
      </div>
      <div className={cn.block}>
        <p>Setting the value prop will change the input to a controlled component.</p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React, { useState } from 'react'
import { Input } from 'kinetic-ui'

const Form = () => {
  const [value, setValue] = useState('value');
  return <>
    <Input label="Controlled" onChange={setValue} value={value} />
    <Input label="Controlled" onChange={setValue} value={value} margin="0px 10px 0px 10px" />
    <Input label="Controlled" onChange={setValue} value={value} />
  </>
}`}</code>
      </pre>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Input label="Controlled" onChange={setValue} value={value} />
        <Input label="Controlled" onChange={setValue} value={value} margin="0px 10px 0px 10px" />
        <Input label="Controlled" onChange={setValue} value={value} />
      </div>
      <div className={cn.header}>
        <h2>Input Error Levels</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Input } from 'kinetic-ui'

<div className={cn.wrapper}>
  <Input label="Error Level 1" error_level={1} error_message="success" />
  <Input label="Error Level 2" error_level={2} error_message="warning" margin="0px 10px 0px 10px" />
  <Input label="Error Level 3" error_level={3} error_message="error" />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Input label="Error Level 1" error_level={1} error_message="success" />
        <Input label="Error Level 2" error_level={2} error_message="warning" margin="0px 10px 0px 10px" />
        <Input label="Error Level 3" error_level={3} error_message="error" />
      </div>
      <div className={cn.header}>
        <h2>Inputs More</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Input } from 'kinetic-ui'

<div className={cn.wrapper}>
  <Input label="Background #ebeeff" background="#ebeeff" />
  <Input label="Disabled" placeholder="disabled" margin="0px 10px 0px 10px" disabled />
  <Input label="Text Align" text_align="right" />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Input label="Background #ebeeff" background="#ebeeff" />
        <Input label="Disabled" placeholder="disabled" margin="0px 10px 0px 10px" disabled />
        <Input label="Text Align" text_align="right" />
      </div>
      <div className={cn.header}>
        <h2>Input Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={input_rows} settings={{ rows_flex: true }}>
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

export default InputsPage;
