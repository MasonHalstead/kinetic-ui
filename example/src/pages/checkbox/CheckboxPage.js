import React, { useState } from 'react';
import { Checkbox, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, checkbox_rows } from './constants';
import cn from './Checkbox.module.scss';

const CheckboxPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Checkbox</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Checkbox } from 'kinetic-ui'

const Page = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={cn.wrapper}>
    <Checkbox onClick={setChecked} checked={checked}>
      Default Checkbox
    </Checkbox>
    <Checkbox onClick={setChecked} checked={checked} native={false}>
      FontAwesome Checkbox
    </Checkbox>
    <Checkbox onClick={setChecked} checked={checked} highlight={false} native={false}>
      Highlight Checkbox
    </Checkbox>
    <Checkbox onClick={setChecked} checked={checked} highlight={false} native={false} disabled>
      Disabled Checkbox
    </Checkbox>
    </div>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Checkbox onClick={setChecked} checked={checked}>
          Default Checkbox
        </Checkbox>
        <Checkbox onClick={setChecked} checked={checked} native={false}>
          FontAwesome Checkbox
        </Checkbox>
        <Checkbox onClick={setChecked} checked={checked} highlight={false} native={false}>
          Highlight Checkbox
        </Checkbox>
        <Checkbox onClick={setChecked} checked={checked} highlight={false} native={false} disabled>
          Disabled Checkbox
        </Checkbox>
      </div>
      <div className={cn.header}>
        <h2>Checkbox Props</h2>
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

export default CheckboxPage;
