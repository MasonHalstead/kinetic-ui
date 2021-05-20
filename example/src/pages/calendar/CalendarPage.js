import React from 'react';
import { Calendar, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, calendar_props } from './constants';
import cn from './Calendar.module.scss';

const CalendarPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Calendar</h2>
      </div>
      <div className={cn.block}>
        <p>
          Calendar functionality includes a day picker, range picker, time picker, presets and a simplified theme. The
          Calendar has been boiled down to take a primary and secondary color for simplicity that can be injected into
          the theme prop. The component is uncontrolled but can take default dates during the initial render.
        </p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Calendar } from 'kinetic-ui'

const Component = () => {
  return (
    <>
      <Calendar onSelect={(d) => console.log(d)} />
      <Calendar onSelect={(d) => console.log(d)} calendar_time />
    </>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Calendar />
        <Calendar calendar_time />
      </div>
      <div className={cn.header}>
        <h2>Calendar Date Picker</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Calendar } from 'kinetic-ui'

const Component = () => {
  return (
    <>
      <Calendar onSelect={(d) => console.log(d)} calendar_presets calendar_display={false}/>
      <Calendar onSelect={(d) => console.log(d)} calendar_presets />
    </>
  )
}`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Calendar calendar_presets calendar_display={false} />
        <Calendar calendar_presets />
      </div>
      <div className={cn.header}>
        <h2>Calendar Range Picker</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Calendar } from 'kinetic-ui'

<Calendar onSelect={(d) => console.log(d)} calendar_range />
<Calendar onSelect={(d) => console.log(d)} calendar_range calendar_presets />`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Calendar calendar_range />
        <Calendar calendar_range calendar_presets />
      </div>
      <div className={cn.header}>
        <h2>Calendar Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={calendar_props} settings={{ rows_flex: true }}>
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

export default CalendarPage;
