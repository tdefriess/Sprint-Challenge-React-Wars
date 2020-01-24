import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CharacterList from "./components/CharacterList";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch(err => {
        console.log("The data was not returned", err);
      })
  }, []);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList characters={characters} setChars={setCharacters}/>
    </div>
  );
}

export default App;
