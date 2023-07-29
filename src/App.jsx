import { useState } from 'react'
import './App.css'
import Formcontainer from './components/Formcontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formcontainer/>
    </>
  )
}

export default App
