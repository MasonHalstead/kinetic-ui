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

export const progress_rows = [
  {
    name: 'current',
    type: 'number',
    default: '0',
    options: '',
    description: 'current progress of the bar',
    uuid: 1,
  },
  {
    name: 'end',
    type: 'number',
    default: '1',
    options: '',
    description: 'end progress of the bar',
    uuid: 2,
  },
  {
    name: 'duration',
    type: 'number',
    default: '3000',
    options: '',
    description: 'duration in milliseconds',
    uuid: 3,
  },
  {
    name: 'theme',
    type: 'object',
    default: '{}',
    options: 'refer to theme',
    description: 'theme override for progress',
    uuid: 4,
  },
];
