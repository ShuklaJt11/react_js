import React, {useState, useEffect} from 'react'

export default function WindowSize() {
  const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    let timeoutId

    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
      setVisibility(true)
      clearTimeout(timeoutId)
      setTimeout(() => setVisibility(false), 500)
    }

    window.addEventListener('resize', handleResize)
    return (() => window.removeEventListener('resize', handleResize))
  }, [])

  return (
    <div className={`window-size ${visibility ? '' : 'hidden'}`}>
      {windowWidth} x {windowHeight}
    </div>
  )
}