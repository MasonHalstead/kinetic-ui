import React from 'react';
import { Table, Accordion } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, theme_rows } from './constants';
import { Link } from 'react-router-dom';
import cn from './Accordion.module.scss';

const options = {
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

const AccordionPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Accordion</h2>
      </div>
      <div className={cn.block}>
        <p>accordion...</p>
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

<Accordion>
  <AccordionItem title="Getting Started" options={options.installation} />
  <AccordionItem title="Accordion" options={options.accordion} />
  <AccordionItem title="Buttons" options={options.buttons} />
  <AccordionItem title="Dropdowns" options={options.dropdowns} />
  <AccordionItem title="Inputs" options={options.inputs} />
</Accordion>
`}</code>
      </pre>
      <div className={cn.wrapper}>
        <Accordion>
          <AccordionItem title="Getting Started" options={options.installation} />
          <AccordionItem title="Accordion" options={options.accordion} />
          <AccordionItem title="Buttons" options={options.buttons} />
          <AccordionItem title="Dropdowns" options={options.dropdowns} />
          <AccordionItem title="Inputs" options={options.inputs} />
        </Accordion>
      </div>
      <div className={cn.header}>
        <h2>Accordion Props</h2>
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

export default AccordionPage;
