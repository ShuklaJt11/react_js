import React from 'react'

function MemeGeneratorForm(props) {
  return (
    <div>
      <form className="meme-form" onSubmit={props.data.handleSubmit}>
        <input
          type="text"
          name="topText"
          value={props.data.topText}
          onChange={(e) => props.data.setTopText(e.target.value)}
          placeholder="Top Text"
        />
        <input
          type="text"
          name="bottomText"
          value={props.data.bottomText}
          onChange={(e) => props.data.setBottomText(e.target.value)}
          placeholder="Bottom Text"
        />
        <button>Gen</button>
      </form>
      <div className="meme">
        <img src={props.data.imageUrl} alt=""/>
        <h2 className="top">{props.data.topText}</h2>
        <h2 className="bottom">{props.data.bottomText}</h2>
      </div>
    </div>
  )
}

export default MemeGeneratorForm