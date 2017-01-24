import React from 'react';

const PURE_FLUX_ERROR = 'PureFlux: Please Return An Object Literal :D';

class PureFlux extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...this.props.appState} || {};
    this.dispatch = (action, data) => {
      const newMergeData = this.props.appActions[action](this.state, data);
      if (typeof newMergeData !== 'object') throw Error(PURE_FLUX_ERROR);
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

export default PureFlux
