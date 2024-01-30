import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const urlSegments = data.url.split('/');
    const pokemonId = urlSegments[urlSegments.length - 2];

    // Formatierung der ID auf 3 Stellen mit führenden Nullen
    const formattedId = `#${pokemonId.padStart(3, '0')}`;

    // Generiere die URL für das Bild basierend auf der Pokémon-ID
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;

    return (
        <>
            <h2>{data.name}</h2>
            <h2>ID: {formattedId}</h2>
            {/* Bild anzeigen */}
            <img src={imageUrl} alt={`Sprite of ${data.name}`} />
            {/* <Link to={`/List/${pokemonId}`}>
                <button>Read More</button>
            </Link> */}
        </>
    );
};

export default Card;

