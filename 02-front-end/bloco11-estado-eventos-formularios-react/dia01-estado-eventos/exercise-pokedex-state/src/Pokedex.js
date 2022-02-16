import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state ={
            value: '',
            tipo: '',
            arrayPok: [],
            fav: false
        }

        this.filtrarPokemon = this.filtrarPokemon.bind(this);
        this.tipoPokemonFire = this.tipoPokemonFire.bind(this);
        this.allPokemons = this.allPokemons.bind(this);
        this.favoritar = this.favoritar.bind(this);
        this.mostrarFav = this.mostrarFav.bind(this);
        this.desFav = this.desFav.bind(this);
    }

    filtrarPokemon(event){
        this.setState({
            value: event.target.value
        });
    }

    tipoPokemonFire(type){
        this.setState({
            tipo: 'Fire'
        })
    }

    allPokemons(){
        this.setState({
            tipo: ''
        })
    }

    favoritar(id){
        this.setState((estadoInicial) => ({
            arrayPok: [...estadoInicial.arrayPok, id]
        }))
    }

    desFav(){
        this.setState({
            arrayPok: []
        })
    }

    incluesFav(id){
        if(!this.state.fav){
            return true;
        }
        return this.state.arrayPok.includes(id)
    }

    mostrarFav(){
        this.setState(estadoInicial => ({
            fav: !estadoInicial.fav
        }))
    }   

    render() {
        const { pokemons } = this.props
        const { value, tipo } = this.state
        const filtroPokemon = pokemons.filter(({ name, type, id }) => {
           return name.toLowerCase().includes(value.toLowerCase()) && 
            type.includes(tipo) && this.incluesFav(id)
        })
        return (            
        <div>
          <input type="text" onChange={this.filtrarPokemon}></input>
          <button onClick={this.tipoPokemonFire}>Fire</button>
          <button onClick={this.allPokemons}>All</button>
          <button onClick={this.mostrarFav}>Favoritos</button>
          <button onClick={this.desFav}>Desfavoritar</button>
            <div className="pokedex">
                {filtroPokemon
                .map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}
                fav={this.favoritar} />)
                }
            </div>
        </div>
        );
    }
}

export default Pokedex;