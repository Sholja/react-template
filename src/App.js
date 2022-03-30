import React from 'react';

import Routes from './core/routes';

import './common/styles/app.scss';

const App = () => (
  <div className="main-container">
    <div className="main-container__content">
      <Routes />
    </div>
  </div>
);

export default App;
