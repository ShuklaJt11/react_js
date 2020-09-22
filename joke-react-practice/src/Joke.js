import React from 'react'

function Joke(props) {
    return (
        <div className="joke-container">
            <p>~ {props.id} ~</p>
            <p style={{display: !props.question && "none"}}>{props.question}</p>
            <p style={{color: !props.question && "#D83333", fontWeight: !props.question && "600"}}>{props.punchline}</p>
        </div>
    )
}

export default Joke