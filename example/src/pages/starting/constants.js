export const headers = [
  {
    name: 'Prop',
    width: '150px',
    uuid: 1
  },
  {
    name: 'Type',
    width: '100px',
    uuid: 2
  },
  {
    name: 'Default',
    width: '200px',
    flex_grow: 1,
    uuid: 3
  },
  {
    name: 'Options',
    width: '200px',
    uuid: 4
  },
  {
    name: 'Description',
    width: '300px',
    uuid: 5
  }
]

export const theme_rows = [
  {
    name: 'default_theme',
    type: 'string',
    default: 'default',
    options: 'default | kinetic | marketstream',
    description: 'color defaults for all of the ui components',
    uuid: 1
  },
  {
    name: 'theme',
    type: 'object',
    default: '{}',
    options: 'refer to theme styling',
    description: 'custom theme styles to fit your design',
    uuid: 2
  },
  {
    name: 'google_fonts',
    type: 'string',
    default:
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto+Mono&family=Roboto:wght@400;500&display=swap',
    options: 'google fonts',
    description: 'allow custom fonts from google',
    uuid: 3
  }
]
