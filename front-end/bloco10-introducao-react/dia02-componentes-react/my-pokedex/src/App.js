import React from "react";
import Pokedex from "./pokedex";
import pokemons from "./data";


class App extends React.Component {
  render() {
    return <main>
      <h1>Pokedex</h1>
      <Pokedex pokemons={pokemons} />
      
    </main>
  }
}


export default App;
