import React, {useState, useEffect} from 'react'

export default function useWindowSize(windowSizeCallback) {
  const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])

  useEffect(() => {

    const handleResize = () => {
      windowSizeCallback()
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleResize)
    return (() => window.removeEventListener('resize', handleResize))
  }, [])

  return [windowWidth, windowHeight]
}