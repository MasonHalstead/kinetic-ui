import React, { useState } from 'react';
import { Input, Dropdown, DropdownCalendar, DropdownCheckbox } from 'kinetic-ui';
import { options } from './constants';
import cn from './TabIndex.module.scss';

const TabIndexPage = () => {
  const [select_options, onSelect] = useState([...options]);
  const [option, setOption] = useState({
    name: 'Option 1',
  });
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Form Page</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`<div>
    <div className={cn.row}>
        <Input label="33%" margin="10px 5px" controlled={false} />
        <Input label="33%" margin="10px 5px" controlled={false} />
        <Input label="33%" margin="10px 5px" controlled={false} />
    </div>
    <div className={cn.row}>
        <Dropdown label="50%" options={options} value={option.name} margin="10px 5px" onSelect={setOption} />
        <DropdownCheckbox options={select_options} label="50%" onSelect={onSelect} margin="10px 5px" />
    </div>
    <div className={cn.row}>
        <Dropdown label="33%" options={options} value={option.name} margin="10px 5px" onSelect={setOption} />
        <Input label="33%" margin="10px 5px" controlled={false} />
        <Input label="33%" margin="10px 5px" controlled={false} />
    </div>
    <div className={cn.row}>
      <DropdownCalendar label="50%" margin="10px 5px" />
      <DropdownCalendar label="50%" margin="10px 5px" />
    </div>
    <div className={cn.row}>
        <Dropdown label="25%" options={options} value={option.name} margin="10px 5px" onSelect={setOption} />
        <DropdownCheckbox options={select_options} label="25%" onSelect={onSelect} margin="10px 5px" />
        <DropdownCheckbox options={select_options} label="25%" onSelect={onSelect} margin="10px 5px" />
        <DropdownCheckbox options={select_options} label="25%" onSelect={onSelect} margin="10px 5px" />
    </div>
</div>
...`}</code>
      </pre>
      <div className={cn.wrapper}>
        <div className={cn.row}>
          <Input label="33%" margin="10px 5px" controlled={false} />
          <Input label="33%" margin="10px 5px" controlled={false} />
          <Input label="33%" margin="10px 5px" controlled={false} />
        </div>
        <div className={cn.row}>
          <Dropdown label="50%" options={options} value={option.name} margin="10px 5px" onSelect={setOption} />
          <DropdownCheckbox options={select_options} label="50%" onSelect={onSelect} margin="10px 5px" />
        </div>
        <div className={cn.row}>
          <Dropdown label="33%" options={options} value={option.name} margin="10px 5px" onSelect={setOption} />
          <Input label="33%" margin="10px 5px" controlled={false} />
          <Input label="33%" margin="10px 5px" controlled={false} />
        </div>
        <div className={cn.row}>
          <DropdownCalendar label="50%" margin="10px 5px" />
          <DropdownCalendar label="50%" margin="10px 5px" />
        </div>
        <div className={cn.row}>
          <Dropdown label="25%" options={options} value={option.name} margin="10px 5px" onSelect={setOption} />
          <DropdownCheckbox options={select_options} label="25%" onSelect={onSelect} margin="10px 5px" />
          <DropdownCheckbox options={select_options} label="25%" onSelect={onSelect} margin="10px 5px" />
          <DropdownCheckbox options={select_options} label="25%" onSelect={onSelect} margin="10px 5px" />
        </div>
      </div>
    </div>
  );
};

export default TabIndexPage;
