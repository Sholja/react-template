import React from 'react';
import { withRouter } from 'react-router-dom';

import Routes from './core/routes';

import './common/styles/app.scss';

const App = () => {
  return (
    <div className="main-container">
      <div className="main-container__content">
        <Routes />
      </div>
    </div>
  );
};

export default withRouter(App);
