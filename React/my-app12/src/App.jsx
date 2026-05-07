function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>This is my first react app.</p>
      {/* calling the second component in the first component */}
      <Cse12 />
    </div>
  );
}

//2nd component
function Cse12() {
  return (
    <div className="Cse12">
      <h1>Welcome to CSE 12</h1>
      <p>This is the second component.</p>
    </div>
  );
}
export default App;