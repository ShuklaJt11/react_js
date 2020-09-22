import React from 'react'

function TodoComponent() {
    const p_styles = {
        display: "inline",
        paddingLeft: 10
    }
    const input_styles = {
        height: 20,
        width:20
    }
    return (
        <div className='todo-container'>
            <input style={input_styles} type="checkbox"/>
            <p style={p_styles}>This is placeholder text</p>
        </div>
    )
}

export default TodoComponent