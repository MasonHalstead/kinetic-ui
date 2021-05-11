import React, { useState } from 'react';
import { DropdownCalendar, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, icon_rows } from './constants';
import cn from './Dropdowns.module.scss';

const DropdownCalendarPage = () => {
  const [calendar, onSelect] = useState({
    selected_date: null,
    start_date: null,
    finish_date: null,
  });
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Dropdown Calendar</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { options } from './options'
import { DropdownCalendar } from 'kinetic-ui'

const [calendar, onSelect] = useState({
    selected_date: null,
    start_date: null,
    finish_date: null,
  });

<div className={cn.wrapper}>
    <DropdownCalendar
        label="Calendar Dropdown"
        selected_date={calendar.selected_date}
        onSelect={onSelect}
        margin="0px 10px"
    />
    <DropdownCalendar
        label="Calendar Range Dropdown"
        calendar_range
        selected_date={calendar.selected_date}
        start_date={calendar.start_date}
        finish_date={calendar.finish_date}
        onSelect={onSelect}
        margin="0px 10px"
    />
    <DropdownCalendar
        label="Calendar Range Presets Dropdown"
        calendar_range
        calendar_presets
        selected_date={calendar.selected_date}
        start_date={calendar.start_date}
        finish_date={calendar.finish_date}
        onSelect={onSelect}
        position="right"
        margin="0px 10px"
    />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex}>
        <DropdownCalendar
          label="Calendar Dropdown"
          selected_date={calendar.selected_date}
          onSelect={onSelect}
          margin="0px 10px"
          nullable
        />
        <DropdownCalendar
          label="Calendar Range Dropdown"
          calendar_range
          selected_date={calendar.selected_date}
          start_date={calendar.start_date}
          finish_date={calendar.finish_date}
          onSelect={onSelect}
          margin="0px 10px"
        />
        <DropdownCalendar
          label="Calendar Range Presets Dropdown"
          calendar_range
          calendar_presets
          selected_date={calendar.selected_date}
          start_date={calendar.start_date}
          finish_date={calendar.finish_date}
          onSelect={onSelect}
          position="right"
          margin="0px 10px"
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

export default DropdownCalendarPage;
