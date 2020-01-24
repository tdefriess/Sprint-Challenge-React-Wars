import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CharacterList from "./components/CharacterList";
import { Button } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://swapi.co/api/people/");
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  // const getCharacters = (link) => {
  //   setUrl(link);
  //   return
  // }
   

  useEffect(() => {
    Axios
      .get(url)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
        console.log(next, prev);
      })
      .catch(err => {
        console.log("The data was not returned", err);
      })
  }, []);



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* <Button color="primary" onClick={getCharacters(prev)}>Prev</Button>
      <Button color="primary" onClick={getCharacters(next)}>Next</Button> */}
      <CharacterList characters={characters} setChars={setCharacters}/>
    </div>
  );
}

export default App;
