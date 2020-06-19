import React from "react";
import Name from "./NameComponent";
import Location from "./LocationComponent";
import Form from './UserForm'
import {UserProvider}from './UserContext'
import ScotchInfoBar from "../ScotchInfoBar";
import "./styles.css";

export default function App() {

  return (
    <UserProvider>
      <div className="App">
        <h2 className="is-size-4">
          We'll use the React Context API to pass and receive data in any
          component.
        </h2>
        <div className="container">
          <Form />

          <h2 className="is-size-4">Display User Info Here 👇</h2>
          <p>
            These two children components will receive data. These could be nested
            components.
          </p>
          <Name />
          <Location />
        </div>
        <ScotchInfoBar />
      </div>
    </UserProvider>
  );
}