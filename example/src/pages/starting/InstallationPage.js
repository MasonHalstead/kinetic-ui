import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'kinetic-ui';
import { CustomCell } from './Cells';
import { headers, theme_rows } from './constants';
import cn from './Starting.module.scss';

const InstallationPage = () => {
  return (
    <div className={cn.page}>
      <div className={cn.header}>
        <h2>Installation</h2>
      </div>
      <div className={cn.block}>
        <p>
          The best way to use kinetic-ui is via yarn. Additionally you will need to install the fontawesome react
          libraries for icons to load correctly. We currently only support fontawesome icons.
        </p>
      </div>
      <pre className="code code-javascript">
        <label>YARN</label>
        <code>
          {`yarn add kinetic-ui 
yarn add @fortawesome/free-solid-svg-icons 
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-brands-svg-icons`}
        </code>
      </pre>
      <div className={cn.header}>
        <h2>Usage</h2>
      </div>
      <div className={cn.block}>
        <p>
          kinetic-ui requires a provider component similar to redux to pass down theme style. Wrap the ThemeProvider
          component around your App to pass down the theme. The example usage also show how to integrate fontawesome and
          add the kinetic-ui css file.
        </p>
        <p>
          kinetic-ui uses google fonts to set font families within the components and can be passed down into the
          ThemeProvider. For instructions check out{' '}
          <a href="https://fonts.google.com/" rel="noreferrer" target="_blank">
            google fonts
          </a>
          .
        </p>
        <p>
          For theme instructions check out the <Link to="/theme">theme documentation</Link>.
        </p>
      </div>
      <pre className="code code-javascript">
        <label>JSX</label>
        <code>{`import React from 'react'
import ReactDOM from 'react-dom';
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
      <div className={cn.header}>
        <h2>ThemeProvider Props</h2>
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

export default InstallationPage;
