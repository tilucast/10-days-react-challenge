import React from 'react';
import ScotchInfoBar from '../ScotchInfoBar';
import './styles.css';
import { useState } from 'react';

export default function App() {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [sum, setSum] = useState(0)

    function sumResult(first, second){
        const a = Number(first) + Number(second)
        setSum(a)
    }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input onChange={e => setFirst(e.target.value)} value={first} type="number" placeholder="0" />
        <input onChange={e => setSecond(e.target.value)} value={second} type="number" placeholder="0" />
      </div>

      <button onClick={() => sumResult(first, second)}>Add Them!</button>

        <h2>{sum}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}