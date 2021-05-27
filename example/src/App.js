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
        <PublicRouter exact path={routes.ACCORDION} component={WaitingComponent(pages.AccordionPage)} />
        <PublicRouter exact path={routes.CALENDAR} component={WaitingComponent(pages.CalendarPage)} />
        <PublicRouter exact path={routes.TAB_INDEX} component={WaitingComponent(pages.TabIndexPage)} />
        <PublicRouter exact path={routes.BUTTONS} component={WaitingComponent(pages.ButtonsPage)} />
        <PublicRouter exact path={routes.SNACKBAR} component={WaitingComponent(pages.SnackbarPage)} />
        <PublicRouter exact path={routes.TABS} component={WaitingComponent(pages.TabsPage)} />
        <PublicRouter exact path={routes.PROGRESS} component={WaitingComponent(pages.ProgressPage)} />
        <PublicRouter exact path={routes.CHECKBOX} component={WaitingComponent(pages.CheckboxPage)} />
        <PublicRouter exact path={routes.DROPDOWNS} component={WaitingComponent(pages.DropdownsPage)} />
        <PublicRouter exact path={routes.DROPDOWN_CALENDAR} component={WaitingComponent(pages.DropdownCalendarPage)} />
        <PublicRouter exact path={routes.DROPDOWN_CHECKBOX} component={WaitingComponent(pages.DropdownCheckboxPage)} />
        <PublicRouter exact path={routes.DROPDOWN_ICON} component={WaitingComponent(pages.DropdownIconPage)} />
        <PublicRouter exact path={routes.SWITCH} component={WaitingComponent(pages.SwitchPage)} />
        <PublicRouter exact path={routes.INPUTS} component={WaitingComponent(pages.InputsPage)} />
        <PublicRouter exact path={routes.INPUTS_SPECIAL} component={WaitingComponent(pages.InputsSpecialPage)} />
        <PublicRouter exact path={routes.MODALS} component={WaitingComponent(pages.ModalsPage)} />
        <PublicRouter exact path={routes.MODALS_TABLE} component={WaitingComponent(pages.ModalsTable)} />
        <PublicRouter exact path={routes.MODALS_WIZARD} component={WaitingComponent(pages.ModalsWizardPage)} />
        <PublicRouter exact path={routes.DROPZONE} component={WaitingComponent(pages.DropzonePage)} />
        <PublicRouter exact path={routes.TABLE_BASICS} component={WaitingComponent(pages.TableBasicsPage)} />
        <PublicRouter exact path={routes.TABLE_HEADERS} component={WaitingComponent(pages.TableHeadersPage)} />
        <PublicRouter exact path={routes.TABLE_FOOTER} component={WaitingComponent(pages.TableFooterPage)} />
        <PublicRouter exact path={routes.TABLE_VARIATIONS} component={WaitingComponent(pages.TableVariationsPage)} />
        <PublicRouter exact path={routes.TABLE_BULK_EDIT} component={WaitingComponent(pages.TableBulkEditPage)} />
        <PublicRouter exact path={routes.TABLE_ACCORDION} component={WaitingComponent(pages.TableAccordionPage)} />
        <PublicRouter component={WaitingComponent(pages.ErrorPage)} />
      </Switch>
    </Router>
  );
};
