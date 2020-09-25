import React, {Component} from 'react'
import TodoComponent from './TodoComponent'
import todosData from './ToDoList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck(id) {
    console.log('changing', id)
    this.setState(prevState => {
      return { 
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      }
    })
  }

  render() {
    const todoComponents = this.state.todos.map(todo => <TodoComponent key={todo.id} todoData={todo} checkFunction={this.handleCheck} />)
    return (
      <div className="app-container">
        <h1>ToDo List!</h1>
        <div className="todo-container">
          {todoComponents}
        </div>
      </div>
    )
  }
}

export default App