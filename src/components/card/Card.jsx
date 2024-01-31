import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ data }) => {
    // console.log(data);
    const urlSegments = data.pokemon ? data.pokemon.url.split('/') : data.url.split('/')
    const pokemonId = urlSegments[urlSegments.length - 2];

    // Formatierung der ID auf 3 Stellen mit führenden Nullen
    const formattedId = `#${pokemonId.padStart(3, '0')}`;

    // Generiere die URL für das Bild basierend auf der Pokémon-ID
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;
    return (
        <>
        { data ?(
            <Link to={`/pokemon/${pokemonId}`}>

                <section id='sec' >
                    <div id='div1'>
                        <img id='img' src={imageUrl} alt={`Sprite of ${data.name}`} />
                    </div>
                    <div id='div2'>
                        <h2>{formattedId}</h2>
                        { data.pokemon ?(
                        <h2>{data?.pokemon.name}</h2>
                        )
                        :
                        (
                        <h2>{data?.name}</h2>
                        )
                        }
                        
                    </div>
                </section>
             </Link>
            )
            :
            (
                <p>Loading...</p>
            )
            }
        </>
    );
};

export default Card;

