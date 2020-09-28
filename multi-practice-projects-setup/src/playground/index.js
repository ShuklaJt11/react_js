import React, { useEffect, useState, useRef } from 'react'
import randomColor from 'randomcolor'
import './index.css'

export default function Playground() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(null)

  const inputRef = useRef()

  useEffect(() => {
    setColor(randomColor())
    inputRef.current.focus()
  }, [count])

  return (
    <div className="app-container">
      <div className="number">
        <span style={{color: color}}>{count}</span>
      </div>
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <hr />
      <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />
    </div>
  )
}