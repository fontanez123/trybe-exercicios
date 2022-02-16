import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image, id } = this.props.pokemon;
        const { fav } = this.props;
        return (
            <div className="pokemon">
                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} alt={`${name} sprite`} />
                <button onClick={() => fav(id)}>Fav</button>
            </div>
        );
    }
}

export default Pokemon;