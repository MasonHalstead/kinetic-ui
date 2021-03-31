import React, { useState } from 'react';
import { Button, Progress, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, progress_rows } from './constants';
import cn from './Progress.module.scss';

const ProgressPage = () => {
  const [current, setProgress] = useState(2);
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Progress</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Button, Progress } from 'kinetic-ui'

const Page = () => {
  const [current, setProgress] = useState(2);
  return (
    <div className={cn.wrapper}>
      <div className={cn.progress}>
        <Progress current={current} end={10} />
      </div>
      <div>
        <Button onClick={() => setProgress(current - 1)} margin="0px 10px" width={100}>
          - 1
        </Button>
        <Button onClick={() => setProgress(current + 1)} margin="0px 10px" width={100}>
          + 1
        </Button>
      </div>
    </div>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper} style={{ flexDirection: 'column' }}>
        <div className={cn.progress}>
          <Progress current={current} end={10} />
        </div>
        <div style={{ display: 'flex' }}>
          <Button onClick={() => setProgress(current - 1)} margin="0px 10px" width={100}>
            - 1
          </Button>
          <Button onClick={() => setProgress(current + 1)} margin="0px 10px" width={100}>
            + 1
          </Button>
        </div>
      </div>
      <div className={cn.header}>
        <h2>Progress Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={progress_rows} settings={{ rows_flex: true }}>
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

export default ProgressPage;
