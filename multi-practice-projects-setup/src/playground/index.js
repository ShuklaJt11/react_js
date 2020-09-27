import React, { useEffect, useState } from 'react'
import randomColor from 'randomcolor'
import './index.css'

export default function Playground() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(null)

  useEffect(() => {setColor(randomColor())}, [count])

  return (
    <div className="app-container">
      <div className="number">
        <span style={{color: color}}>{count}</span>
      </div>
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
    </div>
  )
}