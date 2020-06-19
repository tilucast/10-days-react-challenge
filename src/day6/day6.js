import React, { useState } from 'react';
import ScotchInfoBar from '../ScotchInfoBar';
import './styles.css';

export default function App() {

    const [y, setY] = useState(300)

    const boxStyles = {
      transform: `translateY(${y}px)`
    }

    function incrementY(){
      setY(y - 40)
    }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={incrementY}>👆 Move Up 👆</button>

      {/* move this box using inline styles */}
      <div className="box" style={boxStyles} />

      <ScotchInfoBar />
    </div>
  );
}
