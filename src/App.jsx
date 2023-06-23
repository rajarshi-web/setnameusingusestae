import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import './App.css'


function App() {
  const [name ,setName] = useState('Durga')
  const newName = () => {
   setName('Thakur')
  }
  return (
    <>
      {<h1>Name: {name}</h1>}
      <button onClick={() => setName(newName)}>Click</button>
    </>
  )
}

export default App
