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

export const accordion_props = [
  {
    name: 'margin',
    type: 'string | number',
    default: '0px',
    options: '',
    description: 'sets accordion margin',
    uuid: 1,
  },
  {
    name: 'width',
    type: 'string | number',
    default: '100%',
    options: '',
    description: 'sets accordion width',
    uuid: 2,
  },
  {
    name: 'children',
    type: 'component',
    default: '',
    options: '',
    description: 'each child represents one accordion item',
    uuid: 7,
  },
  {
    name: 'theme',
    type: 'object',
    default: '{}',
    options: 'refer to theme',
    description: 'theme override for table',
    uuid: 8,
  },
];

export const accordion_child_props = [
  {
    name: 'title',
    type: 'string',
    default: 'null',
    options: '',
    description: 'accordion item title',
    uuid: 1,
  },
  {
    name: 'overflow',
    type: 'boolean',
    default: 'false',
    options: '',
    description: 'special case when an overflow is needed outside the accordion item',
    uuid: 2,
  },
  {
    name: 'transition',
    type: 'number',
    default: '600',
    options: '',
    description: 'accordion transition time in milliseconds',
    uuid: 3,
  },
  {
    name: 'expanded',
    type: 'boolean',
    default: `false`,
    options: '',
    description: 'default expanded accordion item',
    uuid: 4,
  },
  {
    name: 'expanded_icon',
    type: 'fontawesome',
    default: `['fas', 'chevron-down']`,
    options: '',
    description: 'expanded fontawesome icon',
    uuid: 5,
  },
  {
    name: 'expand_icon',
    type: 'fontawesome',
    default: `['fas', 'chevron-right']`,
    options: '',
    description: 'expand fontawesome icon',
    uuid: 6,
  },
  {
    name: 'theme',
    type: 'object',
    default: '{}',
    options: 'refer to theme',
    description: 'theme override for table',
    uuid: 7,
  },
];
