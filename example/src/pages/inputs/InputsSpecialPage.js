import React, { useState } from 'react';
import { InputCurrency, InputPercent, InputNumber, Textarea } from 'kinetic-ui';
import cn from './Inputs.module.scss';

const InputsSpecialPage = () => {
  const [value, setValue] = useState({
    value: 0,
  });

  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Inputs Special</h2>
      </div>
      <div className={cn.block}>
        <p>
          Inputs have an internal state and are controlled by the component itself. It is recommended to use debounce
          with an uncontrolled Input so that the onChange event doesnt fire on every keystroke.
        </p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { InputCurrency, InputPercent, InputNumber } from 'kinetic-ui'

<div className={cn.wrapper}>
  <InputCurrency label="Uncontrolled Currency" placeholder="ex. $100" debounce={1000} onChange={(value) => alert(JSON.stringify(value))} />
  <InputPercent label="Uncontrolled Percent" placeholder="ex. 100%" debounce={1000} onChange={(value) => alert(JSON.stringify(value))} margin="0px 10px 0px 10px" />
  <InputNumber label="Uncontrolled Number" placeholder="ex. 100" debounce={1000} onChange={(value) => alert(JSON.stringify(value))} />
</div>`}</code>
      </pre>
      <div className={cn.wrapperFlex}>
        <InputCurrency
          label="Uncontrolled Currency"
          placeholder="ex. $100"
          debounce={1000}
          onChange={(value) => alert(JSON.stringify(value))}
        />
        <InputPercent
          label="Uncontrolled Percent"
          placeholder="ex. 100%"
          debounce={1000}
          onChange={(value) => alert(JSON.stringify(value))}
          margin="0px 10px 0px 10px"
        />
        <InputNumber
          label="Uncontrolled Number"
          placeholder="ex. 100"
          auto_focus
          debounce={1000}
          onChange={(value) => alert(JSON.stringify(value))}
        />
      </div>
      <div className={cn.header}>
        <h2>Inputs Controlled</h2>
      </div>
      <div className={cn.block}>
        <p>Setting the value prop will change the input to a controlled component.</p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React, { useState } from 'react'
import { InputCurrency, InputPercent, InputNumber } from 'kinetic-ui'

const Form = () => {
  const [value, setValue] = useState({
    value: 0,
  });
  return <>
    <InputCurrency label="Controlled Currency" placeholder="ex. $100" onChange={setValue} value={value.value} />
    <InputPercent label="Controlled Percent" placeholder="ex. 100%" onChange={setValue} value={value.value} margin="0px 10px 0px 10px" />
    <InputNumber label="Controlled Number" placeholder="ex. 100" onChange={setValue} value={value.value} />
  </>
}`}</code>
      </pre>
      <div className={cn.wrapperFlex} style={{ marginTop: 0 }}>
        <InputCurrency
          label="Controlled Currency"
          placeholder="ex. $100"
          onChange={setValue}
          value={value.value}
          controlled
        />
        <InputPercent
          label="Controlled Percent"
          placeholder="ex. 100%"
          onChange={setValue}
          value={value.value}
          margin="0px 10px 0px 10px"
          controlled
        />
        <InputNumber
          label="Controlled Number"
          placeholder="ex. 100"
          onChange={setValue}
          value={value.value}
          controlled
        />
      </div>
      <div className={cn.header}>
        <h2>Textarea</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React, { useState } from 'react'
import { InputCurrency, InputPercent, InputNumber } from 'kinetic-ui'

const Form = () => {
  const [value, setValue] = useState("This is a value");
  return <>
    <Textarea
      label="Textarea"
      default_value="This is a default value"
      debounce={2000}
      onChange={(value) => alert(value)}
      width="50%"
      margin="0px 5px 0px 0px"
    />
    <Textarea 
      label="Textarea" 
      value="This is a value" 
      width="50%" 
      onChange={setValue}
      margin="0px 0px 0px 5px" />
  </>
}`}</code>
      </pre>
      <div className={cn.wrapperFlex}>
        <Textarea
          label="Textarea"
          placeholder="ex. 123"
          default_value="This is a default value"
          debounce={2000}
          width="50%"
          margin="0px 5px 0px 0px"
          disabled
          controlled={false}
        />
        <Textarea
          label="Textarea"
          default_value="This is a value"
          width="50%"
          margin="0px 0px 0px 5px"
          controlled={false}
        />
      </div>
    </div>
  );
};

export default InputsSpecialPage;
