/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <label htmlFor=""></label>
    <Card />
    </>
  )
}

export default App
