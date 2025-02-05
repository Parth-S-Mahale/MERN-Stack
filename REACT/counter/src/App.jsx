/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 0;

  const addCounter = () => {
    let newcounter = counter + 1;
    setCounter(newcounter);
  };

  const removeCounter = () => {
    let newcounter = counter - 1;
    if(counter != 0){
      setCounter(newcounter);
    }
  }
  return (
    <>
      <h1>Starting value of counter: {counter}</h1>
      <h2>Here's the counter program</h2>
      <button onClick={addCounter}>Increasing counter: {counter}</button>{" "}
      <button onClick={removeCounter}>decreasing counter: {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
