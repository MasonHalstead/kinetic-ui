import React, { useState } from 'react';
import { Button, Modal, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, modal_rows } from './constants';
import cn from './Modals.module.scss';

const ModalsPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className={cn.header}>
        <h2>Modals</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Button, Modal } from 'kinetic-ui'

const ModalsPage = () => {
  const [modal, setModal] = useState(false)
  return (
<div className={cn.wrapper}>
  <Button onClick={() => setModal(true)}>Open Modal</Button>
  <Modal show={modal} onClose={() => setModal(false)} width={500}>
    <div className={cn.page}>welcome to modal</div>
  </Modal>
</div>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Button onClick={() => setModal(true)}>Open Modal</Button>
        <Modal show={modal} onClose={() => setModal(false)} width={500}>
          <div className={cn.page}>welcome to modal</div>
        </Modal>
      </div>
      <div className={cn.header}>
        <h2>Modal Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={modal_rows} settings={{ rows_flex: true }}>
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

export default ModalsPage;
