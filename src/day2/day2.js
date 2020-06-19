import React from "react";
import "./styles.css";
import ScotchInfoBar from "../ScotchInfoBar";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./user-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
export default function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      <div className="users">
        {users.map(user => (
            <div key={user.name} className="">
                <h3>{user.name}</h3>
                <p>{user.location}</p>
                <p>{user.car}</p>
            </div>
        ))}
      </div>
      <ScotchInfoBar />
    </div>
  );
}