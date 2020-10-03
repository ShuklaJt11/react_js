import React from 'react'
import ReactDOM from 'react-dom'
// import App from './paint_app' // * Paint App
// import App from './todo_app' // * Todo App
// import App from './joke_app' // * Joke App
// import App from './meme_generator_app' // * Meme Generator App
// import App from './playground' // * Playground (For Practice)
import App from './calculator_app' // * Calculator App
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()