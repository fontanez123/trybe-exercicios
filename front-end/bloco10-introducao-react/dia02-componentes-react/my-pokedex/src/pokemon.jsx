import React from "react";


class Pokemon extends React.Component {
    render(){
      const { pokemon: { name, type, averageWeight: {value, measurementUnit}, image } } = this.props;
  
      return(
        <div>
        <h1>{name}</h1>
        <p>{type}</p>
        <p>{value} {measurementUnit}</p>
        <img src={image} alt={name}/>
        </div>
      )
    }
       
    }


export default Pokemon

