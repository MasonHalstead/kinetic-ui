import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { PublicLayout } from 'layouts/PublicLayout';

const Router = React.memo(({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PublicLayout location={rest.location} history={rest.history} match={rest.match}>
          <Component {...props} />
        </PublicLayout>
      )}
    />
  );
});

Router.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
};

export const PublicRouter = withRouter(Router);
