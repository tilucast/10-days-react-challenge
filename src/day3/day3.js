import React, {useState} from "react";
import "./styles.css";
import ScotchInfoBar from "../ScotchInfoBar";

export default function App() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleUserNameInput = event =>{
        setName(event.target.value)
    }
    
    const handleUserAgeInput = event =>{
        setAge(event.target.value)
    }

  return ( 

    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <p>Display Name: {name} </p>
        <p>Display Age: {age}</p>
      </div>

      <div className="inputs">
        <div className="field">
          <label className="label">Name: </label>
          <input onChange={handleUserNameInput} 
          className="input" 
          value={name}
          type="text" placeholder="William" />
        </div>

        <div className="field">
          <label className="label">Age: </label>
          <input onChange={handleUserAgeInput} 
          className="input"
          value={age}
          type="number" placeholder="38" />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}