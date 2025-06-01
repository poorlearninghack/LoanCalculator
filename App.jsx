import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [amount, setAmount]=useState(0);
  const [interest, setInterest]=useState('');
  const [months,setMonths]=useState('');
  const [emi, setEmi]=useState(null);

  const calculateEMI=()=>{
    const emivalue=(amount*interest*months)/(100*12);
    setEmi(emivalue);
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Don't Let your emotions rule you. You are better in maths when don't get stressed with EMI.
        </p>
        <div>
        <input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter total loan amount'/>
        <p>Rs. {amount} is not a huge no., you can do it.</p>
        <input value={interest} onChange={(e)=>setInterest(e.target.value)} placeholder='Enter interest rate' />
        <input value={months} onChange={(e)=>setMonths(e.target.value)} placeholder='Enter number of months' />
        <button onClick={calculateEMI}>Calculate EMI</button>
        <span>Your EMI : {emi}</span>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
