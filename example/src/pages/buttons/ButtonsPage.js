import React from 'react';
import { Button, Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, theme_rows } from './constants';
import cn from './Buttons.module.scss';

const ButtonsPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Buttons</h2>
      </div>
      <div className={cn.block}>
        <p>
          Button variants depend on the colors object passed into the ThemeProvider. If more variants are needed pass
          the colors into the theme.
        </p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Button } from 'kinetic-ui'

<Button width={100}>Primary</Button>
<Button variant='secondary' width={100}>Secondary</Button>
<Button variant='orange' width={100}>Orange</Button>
...`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Button width={100}>Primary</Button>
        <Button variant="secondary" width={100}>
          Secondary
        </Button>
        <Button variant="orange" width={100}>
          Orange
        </Button>
        <Button variant="green" width={100}>
          Green
        </Button>
        <Button variant="blue" width={100}>
          Blue
        </Button>
        <Button variant="red" width={100}>
          Red
        </Button>
        <Button variant="purple" width={100}>
          Purple
        </Button>
        <Button variant="grey" width={100}>
          Grey
        </Button>
      </div>
      <div className={cn.header}>
        <h2>Button Sizes</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Button } from 'kinetic-ui'

<Button width={100} button_size="small">Small</Button>
<Button variant='secondary' width={100} button_size="medium">Medium</Button>
<Button variant='orange' width={100} button_size="large">Large</Button>`}</code>
      </pre>
      <div className={cn.wrapper} style={{ alignItems: 'flex-end', justifyContent: 'flex-start' }}>
        <Button width={100} button_size="small">
          Small
        </Button>
        <Button width={100} margin="0px 10px" button_size="medium">
          Medium
        </Button>
        <Button width={100} button_size="large">
          Large
        </Button>
      </div>
      <div className={cn.header}>
        <h2>Button Examples</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { Button } from 'kinetic-ui'

<Button 
  width={100} 
  onClick={() => alert('button was clicked')} 
  disabled>
  Disabled
</Button>
<Button
  width={'max-content'}
  left_icon={['fas', 'search']}
  caret="left"
  margin="0px 10px"
  position={{ left: 'calc(100% + 10px)' }}
  tooltip="Example Tooltip"
  onClick={() => alert('button was clicked')}
>
  Search
</Button>`}</code>
      </pre>
      <div className={cn.wrapper} style={{ alignItems: 'flex-end', justifyContent: 'flex-start' }}>
        <Button width={100} onClick={() => alert('button was clicked')} disabled>
          Disabled
        </Button>
        <Button
          width={'max-content'}
          left_icon={['fas', 'search']}
          caret="left"
          margin="0px 10px"
          position={{ left: 'calc(100% + 10px)' }}
          tooltip="Button Hover"
          onClick={() => alert('button was clicked')}
        >
          Search
        </Button>
      </div>
      <div className={cn.header}>
        <h2>Button Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={theme_rows} settings={{ rows_flex: true }}>
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

export default ButtonsPage;
