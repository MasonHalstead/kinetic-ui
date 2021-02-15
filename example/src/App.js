import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { WaitingComponent } from 'components/loading/Loading';
import { routes } from 'routes/routes';
import { PublicRouter } from 'routes/PublicRouter';
import * as pages from 'pages/pages';

export const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Redirect exact from={routes.ROOT} to={routes.INSTALLATION} />
        <PublicRouter exact path={routes.INSTALLATION} component={WaitingComponent(pages.InstallationPage)} />
        <PublicRouter exact path={routes.THEME} component={WaitingComponent(pages.ThemePage)} />
        <PublicRouter exact path={routes.BUTTONS} component={WaitingComponent(pages.ButtonsPage)} />
        <PublicRouter exact path={routes.DROPDOWNS} component={WaitingComponent(pages.DropdownsPage)} />
        <PublicRouter exact path={routes.INPUTS} component={WaitingComponent(pages.InputsPage)} />
        <PublicRouter exact path={routes.MODALS} component={WaitingComponent(pages.ModalsPage)} />
        <PublicRouter exact path={routes.MODALS_WIZARD} component={WaitingComponent(pages.ModalsWizardPage)} />

        <PublicRouter exact path={routes.TABLES} component={WaitingComponent(pages.TablesPage)} />
        <PublicRouter exact path={routes.TABLES_ACCORDION} component={WaitingComponent(pages.TablesAccordionPage)} />
        <PublicRouter component={WaitingComponent(pages.ErrorPage)} />
      </Switch>
    </Router>
  );
};
