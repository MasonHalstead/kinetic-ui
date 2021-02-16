import React, { useState } from 'react';
import { Button, Modal, Wizard, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, wizard_rows } from './constants';
import cn from './Modals.module.scss';

const Page = ({ page }) => {
  return <div className={cn.wizard}>{page}</div>;
};

const ModalsWizardPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className={cn.header}>
        <h2>Modal Wizard</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Button, Modal, Wizard } from 'kinetic-ui'

const Page = ({ page }) => {
  return <div className={cn.page}>{page}</div>;
};

const ModalsPage = () => {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <div className={cn.wrapper}>
        <Button onClick={() => setModal(true)}>Open Wizard</Button>
      </div>
      <Modal show={modal} onClose={() => setModal(false)} wizard>
        <Wizard onSubmit={() => setModal(false)}>
          <Page page='page 1' />
          <Page page='page 2' />
          <Page page='page 3' />
          <Page page='Finish!' />
        </Wizard>
      </Modal>
    </div>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Button onClick={() => setModal(true)}>Open Wizard</Button>
        <Modal show={modal} onClose={() => setModal(false)} wizard>
          <Wizard onSubmit={() => setModal(false)}>
            <Page page="page 1" />
            <Page page="page 2" />
            <Page page="page 3" />
            <Page page="Finish!" />
          </Wizard>
        </Modal>
      </div>
      <div className={cn.header}>
        <h2>Wizard Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={wizard_rows} settings={{ rows_flex: true }}>
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

export default ModalsWizardPage;
