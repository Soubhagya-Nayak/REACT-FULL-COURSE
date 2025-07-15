import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15); // useState Hook

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Code With Soubhagya</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
