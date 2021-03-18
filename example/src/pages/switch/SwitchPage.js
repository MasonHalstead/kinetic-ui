import React, { useState } from 'react';
import { Switch, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, switch_rows } from './constants';
import cn from './Switch.module.scss';

const SwitchPage = () => {
  const [checked, SetSwitch] = useState(false);
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Switch</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Switch } from 'kinetic-ui'

const Page = () => {
  const [checked, SetSwitch] = useState(false);
  return (
    <div className={cn.wrapper}>
      <Switch prepend_label="Prepend Label" append_label="Append Label" onClick={SetSwitch} checked={checked} />
    </div>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Switch prepend_label="Prepend Label" append_label="Append Label" onClick={SetSwitch} checked={checked} />
      </div>
      <div className={cn.header}>
        <h2>Switch Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={switch_rows} settings={{ rows_flex: true }}>
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

export default SwitchPage;
