import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: "Soubhagya Nayak",
    roll: 1234,
    age: 20
  }

  const newArr = [1233, 1334, 3455];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card userName="Lavvv" btnTxt="Click On Me"/>
      <Card userName="Yongo" btnTxt="Visit Me"/>
    </>
  )
}

export default App
