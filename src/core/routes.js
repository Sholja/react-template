import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routesConstants from '../common/routes-constants';

const Routes = () => {
  const renderRoutes = routes => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return <Route exact path={route.path} component={route.component} key={index} />;
      });
    } else return null;
  };

  return (
    <React.Fragment>
      <Switch>{renderRoutes(Object.keys(routesConstants.routes).map((key) => routesConstants.routes[key]))}</Switch>
    </React.Fragment>
  );
};

export default Routes;
