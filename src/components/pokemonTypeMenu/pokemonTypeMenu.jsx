
// Inhalt für Burgermenu um nach Pokemontypen zu suchen. Typen sind in pokemonTypes als Array gespeichert. Buttons werden anhand des Arrays generiert

import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../assets/context/mainProvider";
import axios from "axios";
import { slide as Menu } from 'react-burger-menu'
import "./pokemonTypeMenu.css"

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
        <Menu className="pokemonTypeMenu">
            <div className="pokemonTypeMenu__wrapper">
                    <div className="pokemonTypeMenu__wrapper__buttons">
                        {pokemonTypes.map((type, index) => {
                            return (
                                <button onClick={() => setPokemonType(type.name)} key={index}>{type.name}</button>
                                )
                        })}
                </div>
            </div>
        </Menu>
    </>
  );
};

export default PokemonTypeMenu;