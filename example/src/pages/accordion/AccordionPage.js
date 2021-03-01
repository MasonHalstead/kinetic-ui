import React, { useState } from 'react';
import { Table, Accordion, Button, Dropdown } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, accordion_props, accordion_child_props } from './constants';
import { options } from '../dropdowns/constants';
import { Link } from 'react-router-dom';
import cn from './Accordion.module.scss';

const links = {
  installation: [
    { link: '/install', name: 'Installation' },
    { link: '/theme', name: 'Theme' },
  ],
  accordion: [{ link: '/accordion', name: 'Accordion' }],
  buttons: [{ link: '/buttons', name: 'Buttons' }],
  dropdowns: [{ link: '/dropdowns', name: 'Dropdowns' }],
  inputs: [
    { link: '/inputs', name: 'Inputs' },
    { link: '/inputs-special', name: 'Inputs Special' },
  ],
};

const AccordionItem = ({ options = [] }) => {
  return (
    <div className={cn.options}>
      {options.map((o) => (
        <Link to={o.link} key={o.name}>
          {o.name}
        </Link>
      ))}
    </div>
  );
};

const AccordionAdd = ({ children }) => {
  return <div className={cn.options}>{children}</div>;
};

const AccordionDropdown = ({ children }) => {
  return <div style={{ padding: 20 }}>{children}</div>;
};

const AccordionPage = () => {
  const [items, setItems] = useState([
    'Building Accordion Items 1',
    'Building Accordion Items 2',
    'Building Accordion Items 3',
  ]);
  const addItem = () => {
    setItems((prev) => [...prev, `Building Accordion Items ${items.length + 1}`]);
  };
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Accordion</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react';
import { Accordion } from 'kinetic-ui';
import { Link } from 'react-router-dom';

const AccordionItem = ({ options = [] }) => {
  return (
    <div className={cn.options}>
      {options.map((o) => (
        <Link to={o.link} key={o.name}>
          {o.name}
        </Link>
      ))}
    </div>
  );
};

const options = {
  installation: [{ link: '/install', name: 'Installation' }, { link: '/theme', name: 'Theme' }],
  accordion: [{ link: '/accordion', name: 'Accordion' }],
  buttons: [{ link: '/buttons', name: 'Buttons' }],
  dropdowns: [{ link: '/dropdowns', name: 'Dropdowns' }],
  inputs: [{ link: '/inputs', name: 'Inputs' }, { link: '/inputs-special', name: 'Inputs Special' }],
};

<Accordion width="500px" margin="0px auto">
  <AccordionItem title="Getting Started" options={options.installation} />
  <AccordionItem title="Accordion" options={options.accordion} />
  <AccordionItem title="Buttons" options={options.buttons} />
  <AccordionItem title="Dropdowns" options={options.dropdowns} />
  <AccordionItem title="Inputs" options={options.inputs} />
</Accordion>
`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Accordion width="500px" margin="0px auto">
          <AccordionItem title="Getting Started" options={links.installation} />
          <AccordionItem title="Accordion" options={links.accordion} />
          <AccordionItem title="Buttons" options={links.buttons} />
          <AccordionItem title="Dropdowns" options={links.dropdowns} />
          <AccordionItem title="Inputs" options={links.inputs} />
        </Accordion>
      </div>
      <div className={cn.header}>
        <h2>Accordion Extended</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React, { useState } from 'react';
import { Accordion } from 'kinetic-ui';

const AccordionChild = ({ children }) => {
  return <div>{children}</div>;
};

const AccordionPage = () => {
  const [items, setItems] = useState([
    'Building Accordion Items 1',
    'Building Accordion Items 2',
    'Building Accordion Items 3',
  ]);

  const addItem = () => {
    setItems((prev) => [...prev, 'Building Accordion Items ${items.length + 1}']);
  };

  return <>
    <Button onClick={addItem} margin="0px 0px 10px 0px">
      Add Items
    </Button>
    <Accordion width="500px" margin="0px auto">
      <AccordionChild title="Accordion 1">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </AccordionChild>
      <AccordionChild title="Dropdown" overflow>
        <Dropdown options={options} />
      </AccordionChild>
      <AccordionChild title="Accordion 2">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </AccordionChild>
      <AccordionAdd title="Accordion 3" show={false} />
    </Accordion>
  </>
}
`}</code>
      </pre>
      <div className={cn.wrapper} style={{ alignItems: 'flex-start', flexDirection: 'column' }}>
        <Button onClick={addItem} margin="0px 0px 10px 0px">
          Add Items
        </Button>
        <Accordion width="500px" margin="0px auto">
          <AccordionAdd title="Accordion 1">
            {items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </AccordionAdd>
          <AccordionDropdown title="Dropdown" overflow>
            <Dropdown options={options} />
          </AccordionDropdown>
          <AccordionAdd title="Accordion 2">
            {items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </AccordionAdd>
          <AccordionAdd title="Accordion 3" show={false} />
        </Accordion>
      </div>
      <div className={cn.header}>
        <h2>Accordion Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={accordion_props} settings={{ rows_flex: true }}>
          <CustomCell lazy="name" />
          <CustomCell lazy="type" />
          <CustomCell lazy="default" />
          <CustomCell lazy="options" />
          <CustomCell lazy="description" />
        </Table>
      </div>
      <div className={cn.header}>
        <h2>Accordion Child Props</h2>
      </div>
      <div className={cn.wrapper}>
        <Table headers={headers} rows={accordion_child_props} settings={{ rows_flex: true }}>
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

export default AccordionPage;
