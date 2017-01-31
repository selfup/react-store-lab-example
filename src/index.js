/* eslint-disable no-undef */

import Store from './store';
import App from './App';

const app = document.querySelector('#app');

const state = {
  message: new Date().getTime(),
};

const actions = {
  MODIFY() {
    return {
      message: new Date().getTime(),
    };
  },
};

const render = (store) => {
  app.innerHTML = `<div>${App(store)}</div>`;
};

const store = new Store(state, actions, render);

render(store);
