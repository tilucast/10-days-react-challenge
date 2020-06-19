import React from "react";
import ScotchInfoBar from "../ScotchInfoBar";
import "./styles.css";

// Create child Statcard component here
function StatCard(props) {
  return (
      <div className="stat-card">
          <div className="stat-line">
            <span>{props.icon} {props.label}</span>
            <p>{props.value.toLocaleString()}</p>
          </div>
      </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      {/* Use child component x4 here */}
      <StatCard icon={'🤘'} label={'Points'} value={3000} />
      <StatCard icon={'🚈'} label={'Lightnings'} value={6450} />
      <StatCard icon={'👌'} label={'Shakas'} value={337100} />
      <StatCard icon={'💠'} label={'Diamonds'} value={33201} />

      <ScotchInfoBar seriesNumber={8} />
    </div>
  );
}
