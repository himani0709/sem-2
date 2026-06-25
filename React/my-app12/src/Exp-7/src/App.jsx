/*import Studentcard from "./Studentcard";
function App() {
  return (
    <div>
      <h1>Exp-7 Student Card</h1>
      <Studentcard name="Priya" marks={30} grade="A" />
       <Studentcard name="leena" marks={40} grade="A" />
       <Studentcard name="pranal" marks={30} grade="A" />
    </div>
  );

  export default App;
}

import React from 'react';
import { useState } from 'react';
function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <h1>Toggle Button</h1>
      <button onClick ={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF '}
      </button>
    </div>
  );
}
export default App;*/

import { useState } from 'react';
function GameScore() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <h1>Current Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>score a point</button>
    </div>
  );
}
export default GameScore;
