import React, { useState } from 'react';
import { DropdownIcon, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, options, icon_rows } from './constants';
import cn from './Dropdowns.module.scss';

const DropdownIconPage = () => {
  const [option, setOption] = useState({
    name: 'Option 1',
  });
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Dropdown Icon</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { options } from './options'
import { DropdownIcon } from 'kinetic-ui'

<div className={cn.wrapper}>
    <DropdownIcon 
        options={options} 
        position="left" 
        onSelect={setOption} 
        margin="0px 30px 0px 0px" />
    <DropdownIcon
        options={options}
        icon={['fas', 'cog']}
        position="right"
        onSelect={setOption}
        margin="0px 30px 0px 0px"
    />
    <DropdownIcon
        options={options}
        icon={['fas', 'coins']}
        position="right"
        onSelect={setOption}
        margin="0px 30px 0px 0px"
    />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex}>
        <DropdownIcon options={options} position="left" onSelect={setOption} margin="0px 30px 0px 0px" />
        <DropdownIcon
          options={options}
          icon={['fas', 'check']}
          position="left"
          onSelect={setOption}
          margin="0px 30px 0px 0px"
        />
        <DropdownIcon
          options={options}
          icon={['fas', 'cog']}
          position="right"
          onSelect={setOption}
          margin="0px 30px 0px 0px"
        />
        <DropdownIcon
          options={options}
          icon={['fas', 'coins']}
          position="right"
          onSelect={setOption}
          margin="0px 30px 0px 0px"
        />
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={icon_rows} settings={{ rows_flex: true }}>
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

export default DropdownIconPage;
