import React, {useState} from 'react'
import TodoComponent from './TodoComponent'
import todosData from './ToDoList'
import './index.css';

function TodoApp() {
  const [todos, setTodos] = useState(todosData)

  function handleCheck(id) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }
  
  const todoComponents = todos.map(todo => <TodoComponent key={todo.id} todoData={todo} checkFunction={handleCheck} />)
  
  return (
    <div className="app-container">
      <h1>ToDo List!</h1>
      <div className="todo-container">
        {todoComponents}
      </div>
    </div>
  )
}

export default TodoApp