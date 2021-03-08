import React, { useState } from 'react';
import { Button, Snackbar, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, snackbar_rows } from './constants';
import cn from './Snackbar.module.scss';

const SnackbarPage = () => {
  const [show, setSnackbar] = useState(false);
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Snackbar</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Button, Snackbar } from 'kinetic-ui'

const Page = () => {
  const [show, setSnackbar] = useState(false)
  return (
    <div className={cn.wrapper}>
      <Button onClick={() => setSnackbar(true)}>Open Snackbar</Button>
      <Snackbar show={show} onChange={() => setSnackbar(false)} label="1.1.0 has been released" action="UPDATE" />
    </div>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Button onClick={() => setSnackbar(true)}>Open Snackbar</Button>
        <Snackbar show={show} onChange={() => setSnackbar(false)} label="1.1.0 has been released" action="UPDATE" />
      </div>
      <div className={cn.header}>
        <h2>Snackbar Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={snackbar_rows} settings={{ rows_flex: true }}>
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

export default SnackbarPage;
