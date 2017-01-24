import React from 'react';

const STORE_LAB_ERROR = 'ReactStoreLab: Please Return An Object Literal :D';

class ReactStoreLab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...this.props.appState} || {};
    this.dispatch = (action, data) => {
      const newMergeData = this.props.appActions[action](this.state, data);
      if (typeof newMergeData !== 'object') throw Error(STORE_LAB_ERROR);
      this.setState(Object.assign(this.state, newMergeData))
    }
  }

  injectProps() {
    return React.cloneElement(this.props.children, {
      dispatch: this.dispatch,
      state: this.state
    });
  }

  render() {
    return(
      <div>
        {this.injectProps()}
      </div>
    )
  }
}

export default ReactStoreLab
