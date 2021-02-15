# kinetic-ui

> React Component Library

[![NPM](https://img.shields.io/npm/v/kinetic-ui.svg)](https://www.npmjs.com/package/kinetic-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Kinetic UI Documentation](https://kinetic-ui.herokuapp.com/)

## Install

```bash
yarn add kinetic-ui
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-brands-svg-icons
```

## Usage

```jsx
import React from 'react'
import { ThemeProvider, Button } from 'kinetic-ui'
import 'kinetic-ui/index.css'

// fontawesome for icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(far, fas, fab)

const App = () => {
  return <Button>Button!</Button>
}

const render = (Component) =>
  ReactDOM.render(
    <ThemeProvider default_theme='kinetic'>
      <Component />
    </ThemeProvider>,
    document.getElementById('root')
  )

render(App)
```

## License

MIT © [](https://github.com/)
