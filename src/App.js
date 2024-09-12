function App(props) {
    const currDate = new Date();

  return (
    <div>
      <h1>Hello Dolla</h1>
      <h2>The date and time now is {currDate.toLocaleString()}.</h2>
    </div>
  );
}

export default App;
