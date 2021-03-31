import React from 'react';
import { Tabs, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, tabs, tab_rows } from './constants';
import cn from './Tabs.module.scss';

const Tab = ({ tab }) => {
  return <div className={cn.tab}>{tab}</div>;
};

const TabsPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Tabs</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Tabs } from 'kinetic-ui'

const Tab = ({ tab }) => {
  return <div className={cn.tab}>{tab}</div>;
};

const Page = () => {
  return (
    <div className={cn.wrapper}>
      <Tabs tabs={tabs} onSelect={() => setSnackbar(false)} folders>
        <Tab tab="Tab 1" />
        <Tab tab="Tab 2" />
        <Tab tab="Tab 3" />
      </Tabs>
    </div>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Tabs tabs={tabs} onSelect={(tab) => alert(JSON.stringify(tab))} folders>
          <Tab tab="Tab 1" />
          <Tab tab="Tab 2" />
          <Tab tab="Tab 3" />
        </Tabs>
      </div>
      <div className={cn.header}>
        <h2>Tabs Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={tab_rows} settings={{ rows_flex: true }}>
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

export default TabsPage;
