import React from 'react';

const STORE_LAB_ERROR = 'ReactStoreLab: Please Return An Object Literal :D';

class ReactStoreLab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...this.props.appState} || {};
    this.dispatch = (action, data) => {
      /* we gonna code this part! */
    }
  }

  injectProps() {
    /* we gonna code this part too! */
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
