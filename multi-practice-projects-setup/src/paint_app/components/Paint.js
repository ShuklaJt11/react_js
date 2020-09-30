import React, { useEffect, useRef, useState, useCallback } from 'react'
import randomColor from 'randomcolor'
import Name from './Name'
import ColorPicker from './ColorPicker'
import useWindowSize from './WindowSize'
import Canvas from './Canvas'
import RefreshButton from './RefreshButton'

export default function Paint() {
  const [colors, setColors] = useState([])
  const [activeColor, setActiveColor] = useState(null)
  const [visibility, setVisibility] = useState(false)
  
  const headerRef = useRef({offsetHeight:0})

  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
    .then(res => res.json())
    .then(res => {
      setColors(res.colors.map(color => color.hex.value))
      setActiveColor(res.colors[0].hex.value)
    })
  }, [])

  useEffect(getColors, [])

  let timeoutId = useRef()
  const [windowWidth, windowHeight] = useWindowSize(() => {
    setVisibility(true)
    clearTimeout(timeoutId.current)
    timeoutId.current = setTimeout(() => setVisibility(false), 500)
  })

  return (
    <div className="app">
      <header ref={headerRef} style={{borderTop: `10px solid ${activeColor}`}}>
        <div>
          <Name />
        </div>
        <div style={{marginTop: 10}}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
          <RefreshButton refreshCallback={getColors} />
        </div>
      </header>
      {activeColor && (
        <Canvas
          color={activeColor}
          height={windowHeight - headerRef.current.offsetHeight - 10}
        />
      )}
      <div className={`window-size ${visibility ? '' : 'hidden'}`}>
        {windowWidth} x {windowHeight}
      </div>
    </div>
  )
}