import React from 'react';

const App = ({ dispatch, state }) => {
  return (
    <div className="App">
      <h1>{state.msg}</h1>
      <button onClick={() => dispatch('OK', {msg: 'ok'})}>
        ok
      </button>
      <button onClick={() => dispatch('OKOKOK')}>
        okokok
      </button>
    </div>
  );
};

export default App;
