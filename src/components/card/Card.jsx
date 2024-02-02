import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ data }) => {
    // Extrahiere die Pokémon-ID aus der URL, indem die URL in Segmente aufgeteilt wird und das zweite Segment von hinten verwendet wird
    const urlSegments = data.pokemon ? data.pokemon.url.split('/') : data.url.split('/')
    const pokemonId = urlSegments[urlSegments.length - 2];

    // Formatierung der ID auf 3 Stellen mit führenden Nullen
    const formattedId = `#${pokemonId.padStart(3, '0')}`;

    // Generiere die URL für das Bild basierend auf der Pokémon-ID
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemonId}.gif`;
    return (
        <>
        {/* // Wenn die Daten vorhanden sind, zeige das Pokémon an, andernfalls zeige "Loading..." an */}
        { data ?(
            <Link to={`/pokemon/${pokemonId}`} className='pokemonCard'>

                <section id='sec' >
                    <div id='div1'>
                        <img className='pokemonIMG' src={imageUrl} alt={`Sprite of ${data.name}`} />
                    </div>
                    <div id='div2'>
                        <h4>{formattedId}</h4>
                        { data.pokemon ?(
                        <h4>{data?.pokemon.name}</h4>
                        )
                        :
                        (
                        <h4>{data?.name}</h4>
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

