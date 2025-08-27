import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          My favourite Foods
        </h1>
        <ul>
          <li>Cheese Pizza</li>
          <li>Chicken</li>
          <li>PavBhaji</li>
        </ul>
      </div>
    </>
  )
}

export default App
