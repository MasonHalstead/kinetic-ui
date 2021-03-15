import React from 'react';
import { Dropzone, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, theme_rows } from './constants';
import cn from './Dropzone.module.scss';

const DropzonePage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Dropzone</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Dropzone } from 'kinetic-ui'

<Dropzone label="Add Documents" onDrop={onDrop}/>`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Dropzone label="Add Documents" />
      </div>
      <div className={cn.header}>
        <h2>Button Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={theme_rows} settings={{ rows_flex: true }}>
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

export default DropzonePage;
