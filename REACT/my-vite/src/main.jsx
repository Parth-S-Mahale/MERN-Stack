/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: "a",
    props: {
      href: "https://www.google.com",
      target: "_blank",
    },
    childern: "Click me to visit google",
  };

  function MyApp(){
    return (
        <div>
            <h1>Custom React app</h1>
        </div>
    )
  }

  const anotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
  )



  const areactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target:"_blank"},
    'click to visit google'
  )

ReactDOM.createRoot(document.getElementById('root'))
.render(

    // <MyApp />
    // anotherElement
    // reactElement
    // areactElement,
    <App />

)
