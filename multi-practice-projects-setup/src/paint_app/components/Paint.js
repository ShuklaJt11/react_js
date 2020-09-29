import React, { useEffect, useRef, useState, useCallback } from 'react'
import randomColor from 'randomcolor'
import Name from './Name'
import ColorPicker from './ColorPicker'
import WindowSize from './WindowSize'
import Canvas from './Canvas'
import RefreshButton from './RefreshButton'

export default function Paint() {
  const [colors, setColors] = useState([])
  const [activeColor, setActiveColor] = useState(null)
  const headerTag = useRef({height:0})

  const getColors = () => {
    const baseColor = randomColor().slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
    .then(res => res.json())
    .then(res => {
      setColors(res.colors.map(color => color.hex.value))
      setActiveColor(res.colors[0].hex.value)
    })
  }

  useEffect(getColors, [])

  const cb = useCallback(getColors)

  return (
    <div className="app">
      <header ref={headerTag} style={{borderTop: `10px solid ${activeColor}`}}>
        <div>
          <Name />
        </div>
        <div style={{marginTop: 10}}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
          <RefreshButton refreshCallback={cb} />
        </div>
      </header>
      {activeColor && (
        <Canvas
          color={activeColor}
          height={window.innerHeight - headerTag.current.height}
        />
      )}
      <WindowSize />
    </div>
  )
}