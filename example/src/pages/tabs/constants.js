export const tabs = [
  {
    name: 'Tab 1',
    uuid: 1,
  },
  {
    name: 'Tab 2',
    uuid: 2,
  },
  {
    name: 'Tab 3',
    uuid: 3,
  },
];

export const headers = [
  {
    name: 'Prop',
    width: '150px',
    uuid: 1,
  },
  {
    name: 'Type',
    width: '100px',
    uuid: 2,
  },
  {
    name: 'Default',
    width: '200px',
    flex_grow: 1,
    uuid: 3,
  },
  {
    name: 'Options',
    width: '200px',
    flex_grow: 1,
    uuid: 4,
  },
  {
    name: 'Description',
    width: '300px',
    uuid: 5,
  },
];

export const tab_rows = [
  {
    name: 'onSelect',
    type: 'function',
    default: '() => {}',
    options: '',
    description: 'onSelect function fires when a tab is selected',
    uuid: 1,
  },
  {
    name: 'tabs',
    type: 'array',
    default: '[]',
    options: '',
    description: 'tab display',
    uuid: 2,
  },
  {
    name: 'theme',
    type: 'object',
    default: '{}',
    options: 'refer to theme',
    description: 'theme override for button',
    uuid: 4,
  },
  {
    name: 'default_tab',
    type: 'number',
    default: '0',
    options: '',
    description: 'selects default tab',
    uuid: 5,
  },
  {
    name: 'width',
    type: 'number | string',
    default: '100%',
    options: '',
    description: 'tabs width',
    uuid: 8,
  },
  {
    name: 'margin',
    type: 'number | string',
    default: '0px',
    options: '',
    description: 'margin around the tabs',
    uuid: 9,
  },
];
