import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'kinetic-ui';
import cn from './Menu.module.scss';

const options = {
  installation: [
    { link: '/install', name: 'Installation' },
    { link: '/theme', name: 'Theme' },
  ],
  accordion: [{ link: '/accordion', name: 'Accordion' }],
  calendar: [{ link: '/calendar', name: 'Calendar' }],
  buttons: [{ link: '/buttons', name: 'Buttons' }],
  checkbox: [{ link: '/checkbox', name: 'Checkbox' }],
  dropdowns: [{ link: '/dropdowns', name: 'Dropdowns' }],
  dropzone: [{ link: '/dropzone', name: 'Dropzone' }],
  inputs: [
    { link: '/inputs', name: 'Inputs' },
    { link: '/inputs-special', name: 'Inputs Special' },
  ],
  switch: [{ link: '/switch', name: 'Switch' }],
  snackbar: [{ link: '/snackbar', name: 'Snackbar' }],
  modals: [
    { link: '/modals', name: 'Modals' },
    { link: '/modals-wizard', name: 'Modals Wizard' },
  ],
  tables: [
    { link: '/table-basics', name: 'Table Basics' },
    { link: '/table-headers', name: 'Table Headers' },
    { link: '/table-footer', name: 'Table Footer' },
    { link: '/table-variations', name: 'Table Variations' },
    { link: '/table-bulk-edit', name: 'Table Bulk Edit' },
    { link: '/table-accordion', name: 'Table Accordion' },
  ],
};
export const Menu = () => {
  return (
    <div className={cn.menu}>
      <Accordion>
        <AccordionItem title="Getting Started" options={options.installation} />
        <AccordionItem title="Accordion" options={options.accordion} />
        <AccordionItem title="Calendar" options={options.calendar} />
        <AccordionItem title="Checkbox" options={options.checkbox} />
        <AccordionItem title="Buttons" options={options.buttons} />
        <AccordionItem title="Dropdowns" options={options.dropdowns} />
        <AccordionItem title="Dropzone" options={options.dropzone} />
        <AccordionItem title="Switch" options={options.switch} />
        <AccordionItem title="Inputs" options={options.inputs} />
        <AccordionItem title="Snackbar" options={options.snackbar} />
        <AccordionItem title="Modals" options={options.modals} />
        <AccordionItem title="Table" options={options.tables} />
      </Accordion>
    </div>
  );
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
