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

export const modal_rows = [
  {
    name: 'onClose',
    type: 'function',
    default: '() => {}',
    options: '',
    description: 'onClose function to hide the modal',
    uuid: 1,
  },
  {
    name: 'show',
    type: 'boolean',
    default: 'false',
    options: 'true | false',
    description: 'will show and hide the modal',
    uuid: 2,
  },
  {
    name: 'theme',
    type: 'object',
    default: '{}',
    options: 'refer to theme',
    description: 'theme override for button',
    uuid: 3,
  },
  {
    name: 'mobile',
    type: 'boolean',
    default: 'false',
    options: 'true | false',
    description: 'will expand the modal and reduce margin for mobile',
    uuid: 4,
  },
  {
    name: 'wizard',
    type: 'boolean',
    default: 'false',
    options: 'true | false',
    description: 'will remove the modal padding for the wizard component',
    uuid: 5,
  },
  {
    name: 'padding',
    type: 'string',
    default: '10px',
    options: '',
    description: 'sets the modals content padding',
    uuid: 6,
  },
  {
    name: 'width',
    type: 'number',
    default: '500',
    options: '',
    description: 'modal needs to have a set width',
    uuid: 7,
  },
  {
    name: 'children',
    type: 'function | component',
    default: 'null',
    options: '',
    description: 'display components',
    uuid: 8,
  },
];

export const wizard_rows = [
  {
    name: 'onSubmit',
    type: 'function',
    default: '() => {}',
    options: '',
    description: 'onSubmit function on the last wizard button',
    uuid: 1,
  },
  {
    name: 'onStep',
    type: 'function',
    default: '(page, last_page) => {}',
    options: '',
    description: 'onStep returns wizard information and is fired on page changes',
    uuid: 2,
  },
  {
    name: 'theme',
    type: 'object',
    default: '{}',
    options: 'refer to theme',
    description: 'theme override for button',
    uuid: 3,
  },
  {
    name: 'submit',
    type: 'string',
    default: `Submit`,
    options: '',
    description: 'changed the submit button value',
    uuid: 4,
  },
  {
    name: 'width',
    type: 'number',
    default: `500`,
    options: '',
    description: 'the wizard flag needs to be active on the modal for the wizard width to work',
    uuid: 5,
  },
  {
    name: 'children',
    type: 'function | component',
    default: 'null',
    options: '',
    description: 'nested children become pages',
    uuid: 6,
  },
];
