import React from 'react'

function TodoComponent(props) {
  return (
    <div className='todo-object'>
      <input className="todo-checkbox" type="checkbox" checked={props.todoData.completed} onChange={() => props.checkFunction(props.todoData.id)} />
      <p className="todo-label">{props.todoData.text}</p>
    </div>
  )
}

export default TodoComponent