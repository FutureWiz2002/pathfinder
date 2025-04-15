import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Watch me make the greatest dijstar's algorithm of all time, {count}</p>
      </div>

    </>
  )
}

export default App
