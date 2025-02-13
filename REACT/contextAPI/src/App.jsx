/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>React video for context API</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
