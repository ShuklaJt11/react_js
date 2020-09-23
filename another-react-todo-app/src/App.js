import React from 'react';
import TodoComponent from './TodoComponent'
import todos from './ToDoList'

function App() {
  const todoComponents = todos.map(todo => <TodoComponent key={todo.id} todoData={todo} />)
  return (
    <div className="app-container">
      <h1>ToDo List!</h1>
      <div className="todo-container">
        {todoComponents}
      </div>
    </div>
  );
}

export default App;
