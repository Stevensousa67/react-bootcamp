import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Step step={step} setStep={setStep}/>
      <Counter count={count} setCount={setCount} step={step} />
      <DateDisplay count={count}/>
    </div>
  );
}

function Step({step, setStep}){

  function increment(){
    setStep((s) => s + 1);
  }
  function decrement(){
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <div className="step">
      <button onClick={decrement}>-</button>
      <span>Step: {step}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

function Counter({count, setCount, step}){

  function increment(){
    setCount((c) => c + step);
  }
  function decrement(){
    setCount((c) => c - step);
  }

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>Count: {count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

function DateDisplay({ count }) {
  const adjustedDate = new Date();
  adjustedDate.setDate(adjustedDate.getDate() + count);
  const dateString = adjustedDate.toDateString();

  return (
    <div className="date">
        <span>
          {count === 0
            ? `Today is ${dateString}`
            : count > 0
            ? `${count} days from today will be ${dateString}`
            : `${count} days from today was ${dateString}`}
        </span>
    </div>
  );
}
