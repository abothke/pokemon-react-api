
// Inhalt für Burgermenu um nach Pokemontypen zu suchen. Typen sind in pokemonTypes als Array gespeichert. Buttons werden anhand des Arrays generiert

import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../context/mainProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const PokemonTypeMenu = () => {
    const { pokemonTypes, setPokemonTypes, pokemons, setPokemons } = useContext(mainContext)
    const [pokemonType, setPokemonType] = useState("");
    console.log(pokemonTypes)
    console.log(pokemons)
    // Nach Einträgen in pokemons suchen und mit dem Array pokemonTypes vergleichen. Wenn ein Eintrag in pokemons mit einem Eintrag in pokemonTypes übereinstimmt, dann wird dieser Eintrag in pokemonTypes angezeigt.

    useEffect(() => {
        const getPokemonByType = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/type/${pokemonType}`)
            setPokemons(res.data.pokemon)
        }
        { pokemonType ? getPokemonByType() : null }
    }
    , [pokemonType])


  return (
    <>
        <div className="pokemonTypeMenu">
            <div className="pokemonTypeMenu__wrapper">
                    <div className="pokemonTypeMenu__wrapper__buttons">
                        {pokemonTypes.map((type, index) => {
                            return (
                                // <Link to={`/type/${type.name}`} key={index}>
                                <button onClick={() => setPokemonType(type.name)} key={index}>{type.name}</button>
                                // </Link>
                            )
                        })}
                </div>
            </div>
        </div>
    </>
  );
};

export default PokemonTypeMenu;