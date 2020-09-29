import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import randomColor from 'randomcolor'
import './index.css'

export default function Playground() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  const [color, setColor] = useState(randomColor())
  useEffect(() => inputRef.current.focus(), [count])

  const cb = useCallback(num => console.log(num), [count])

  return (
    <div className="app-container">
      <div className="number">
        <span style={{color: color}}>{count}</span>
      </div>
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <button onClick={() => setColor(randomColor())}>Change Color</button>
      <hr />
      <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />
      <hr />
      <Calculate callback={cb} num={count} />
    </div>
  )
}

const Calculate = React.memo(({callback, num}) => {
  callback(num)
  const renderCount = useRef(1)
  return <div>{renderCount.current++}</div>
})