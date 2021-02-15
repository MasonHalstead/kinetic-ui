# kinetic-ui

> react opionionated component library for developers

[![NPM](https://img.shields.io/npm/v/kinetic-ui.svg)](https://www.npmjs.com/package/kinetic-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen)](https://aqueous-mountain-73542.herokuapp.com/)
![Size](https://img.shields.io/bundlephobia/min/kinetic-ui/1.2.3)
![License](https://img.shields.io/npm/l/kinetic-ui)

## [Documentation](https://aqueous-mountain-73542.herokuapp.com/)

kinetic-ui was created to speed up development time while maintaining flexibility. This library is opionionated and was built from many iterations on multiple projects. Most of the components can be interchangable and are not limited to the combination that has been put together inside the library.

I use this library on all of my projects and thought it would be nice to share not only for my own personal use but for others as well.

The documentation is sparse but will be growing constantly. A lot of the core components are available and there will be more to come.

[check out the documentation here](https://aqueous-mountain-73542.herokuapp.com)

## Install

```bash
yarn add kinetic-ui

// requires fontawesome icons
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-brands-svg-icons
```

## Usage

```jsx
import React from 'react'
import { ThemeProvider, Button } from 'kinetic-ui'
import 'kinetic-ui/dist/index.css'

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
