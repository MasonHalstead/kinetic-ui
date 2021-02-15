import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';

// ---- REQUIRED FOR KINETIC-UI ---- //
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

import { ThemeProvider } from 'kinetic-ui';
import 'kinetic-ui/dist/index.css';

library.add(far, fas);
// ---- REQUIRED FOR KINETIC-UI ---- //

const render = (Component) =>
  ReactDOM.render(
    <ThemeProvider>
      <Component />
    </ThemeProvider>,
    document.getElementById('root'),
  );

render(App);
