/* global document, window */

import Store from './store';
import App from './App';
import state from './state';
import actions from './actions';

const app = document.querySelector('#root');

const render = (store) => {
  app.innerHTML = App(store);
};

const store = new Store(state, actions, render);

window.dispatch = store.dispatch;

render(store);
