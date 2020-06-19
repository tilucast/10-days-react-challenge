import React from 'react';
import ScotchInfoBar from '../ScotchInfoBar';
import './styles.css';
import { useState } from 'react';

export default function App() {
    const [phrase, setPhrase] = useState('')

    if(phrase === 'open sesame') alert('You may pass!')

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input onChange={e => setPhrase(e.target.value)} type="text" value={phrase} placeholder="Super duper secret" />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

