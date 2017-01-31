const App = ({ state }) => {
  const { message } = state;

  return (`
    <div>
      <h1> ${message} </h1>
      <button
        onclick='store.dispatch("MODIFY")'
      >
        Change Number
      </button>
    </div>
  `);
};

export default App;
