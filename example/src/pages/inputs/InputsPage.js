import React from 'react';
import { Input, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, input_rows } from './constants';
import cn from './Inputs.module.scss';

const InputsPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Inputs</h2>
      </div>

      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Input } from 'kinetic-ui'

<div className={cn.wrapper}>
  <Input label="Default Value" debounce={1000} value="render default value" />
  <Input label="Left Icon" placeholder="left icon..." left_icon={['fas', 'coins']} margin="0px 10px 0px 10px" />
  <Input label="Right Icon" placeholder="right icon..." right_icon={['fas', 'coins']} />
</div>
<div className={cn.wrapper}>
  <Input label="Background #ebeeff" background="#ebeeff" />
  <Input label="Disabled" placeholder="disabled" margin="0px 10px 0px 10px" disabled />
  <Input label="Text Align" text_align="right" value="right align value" />
</div>
<div className={cn.wrapper}>
  <Input label="Error Level 1" error_level={1} error_message="success" />
  <Input label="Error Level 2" error_level={2} error_message="warning" margin="0px 10px 0px 10px" />
  <Input label="Error Level 3" error_level={3} error_message="error" />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex}>
        <Input label="Default Value" debounce={1000} value="render default value" />
        <Input label="Left Icon" placeholder="left icon..." left_icon={['fas', 'coins']} margin="0px 10px 0px 10px" />
        <Input label="Right Icon" placeholder="right icon..." right_icon={['fas', 'coins']} />
      </div>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Input label="Background #ebeeff" background="#ebeeff" />
        <Input label="Disabled" placeholder="disabled" margin="0px 10px 0px 10px" disabled />
        <Input label="Text Align" text_align="right" value="right align value" />
      </div>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <Input label="Error Level 1" error_level={1} error_message="success" />
        <Input label="Error Level 2" error_level={2} error_message="warning" margin="0px 10px 0px 10px" />
        <Input label="Error Level 3" error_level={3} error_message="error" />
      </div>
      <div className={cn.header}>
        <h2>Input Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={input_rows} settings={{ rows_flex: true }}>
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

export default InputsPage;
