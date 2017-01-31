export default class Store {
  constructor(state = {}, actions = {}, render = () => {}) {
    this.state = state;
    this.actions = actions;
    this.render = render;
    this.dispatch = (action, options) => {
      const newValue = this.actions[action](this.state, options);
      Object.assign(this.state, newValue);
      this.render(this);
    };
  }
}
