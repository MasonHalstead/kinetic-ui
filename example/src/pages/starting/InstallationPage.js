import React from 'react';
import cn from './Starting.module.scss';

const InstallationPage = () => {
  return (
    <div>
      <div className={cn.header}>
        <h2>Installation</h2>
      </div>
      <pre className="code code-javascript">
        <label>YARN</label>
        <code>{`yarn add kinetic-ui 
yarn add @fortawesome/free-solid-svg-icons 
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-brands-svg-icons`}</code>
      </pre>
      <div className={cn.header}>
        <h2>Usage</h2>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import { ThemeProvider } from 'kinetic-ui'
import 'kinetic-ui/dist/index.css'

// fontawesome for icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(far, fas, fab)

const render = (Component) =>
  ReactDOM.render(
    <ThemeProvider default_theme='kinetic'>
      <Component />
    </ThemeProvider>,
    document.getElementById('root')
  )

render(App)`}</code>
      </pre>
    </div>
  );
};

export default InstallationPage;
