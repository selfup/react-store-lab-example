import React from 'react';
import ReactDOM from 'react-dom';
import PureFlux from './PureFlux';
import App from './App';

const appState = {
  msg: 'wow',
};

const appActions = {
  OK(state, options) {
    return options;
  },
  OKOKOK() {
    return {
      msg: 'okokok',
    };
  },
};

ReactDOM.render(
  <PureFlux
    appState={appState}
    appActions={appActions}
  >
    <App />
  </PureFlux>,
  document.getElementById('root')
);
