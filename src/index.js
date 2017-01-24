import React from 'react';
import ReactDOM from 'react-dom';
import ReactStoreLab from './ReactStoreLab';
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
  <ReactStoreLab
    appState={appState}
    appActions={appActions}
  >
    <App />
  </ReactStoreLab>,
  document.getElementById('root')
);
