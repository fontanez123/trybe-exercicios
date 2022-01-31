import React from "react";
import Pokemon from "./pokemon";

class Pokedex extends React.Component{
    render(){
        const { pokemons } = this.props
        return(
            <div>
            {pokemons.map((elemento) => <Pokemon key={elemento.id} pokemon={elemento}/>)}
            </div>
        )
    }
}

export default Pokedex