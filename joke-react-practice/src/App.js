import React from 'react';
import logo from './logo.svg';
import Joke from './Joke'
import jokesData from './JokesData'

function App() {
  const jokeComponents = jokesData.map(joke => <Joke id={joke.id} question={joke.question} punchline={joke.punchline} />)


  return (
    <div className="App">
      <h2>Jokes !</h2>
      {jokeComponents}
    </div>
  );
}

export default App;
