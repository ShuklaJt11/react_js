import React, {Component} from 'react'

class TodoComponent extends Component {
  render() {
    return (
      <div className='todo-object'>
        <input className="todo-checkbox" type="checkbox" checked={this.props.todoData.completed} onChange={() => this.props.checkFunction(this.props.todoData.id)} />
        <p className="todo-label">{this.props.todoData.text}</p>
      </div>
    )
  }
}

export default TodoComponent