import React, {useState, useEffect} from 'react'
import MemeGeneratorForm from './MemeGeneratorForm'

function MemeGenerator() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [imageUrl, setImageUrl] = useState("http://i.imgflip.com/1bij.jpg")
  const [allMemeImgs, setAllMemeImgs] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    const image = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)]
    setImageUrl(image.url)
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => {
        const {memes} = res.data
        setAllMemeImgs(memes)
      })
  }, [])

  const dataObj = {
    imageUrl: imageUrl,
    topText: topText,
    bottomText: bottomText,
    handleSubmit: handleSubmit,
    setTopText: setTopText,
    setBottomText: setBottomText
  }

  return (
    <MemeGeneratorForm data={dataObj} />
  )
}

export default MemeGenerator