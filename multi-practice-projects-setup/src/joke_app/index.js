import React from 'react';
import Joke from './Joke'
import jokesData from './JokesData'
import './index.css'

function JokeApp() {
  const jokeComponents = jokesData.map(joke => <Joke id={joke.id} question={joke.question} punchline={joke.punchline} />)


  return (
    <div className="App">
      <h2>Jokes !</h2>
      {jokeComponents}
    </div>
  );
}

export default JokeApp