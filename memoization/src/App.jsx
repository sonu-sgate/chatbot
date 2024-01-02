import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseMemo from './Memo/Use'
import Use from './Memo/Use'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Use/>
    </>
  )
}

export default App
