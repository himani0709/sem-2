import {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);
// increment function
  const increment = () => {
    setCount(count + 1);
  };
// decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
    </div>
  )
};
export default App;

