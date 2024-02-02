
// Inhalt für Burgermenu um nach Pokemontypen zu suchen. Typen sind in pokemonTypes als Array gespeichert. Buttons werden anhand des Arrays generiert

import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../assets/context/mainProvider";
import axios from "axios";
import { stack as Menu } from 'react-burger-menu'
import "./pokemonTypeMenu.css"

const PokemonTypeMenu = () => {
    const { pokemonTypes, setPokemons } = useContext(mainContext)
    const [pokemonType, setPokemonType] = useState("");
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
        <Menu
        isOpen={ false }
        width={"300px"}
        pageWrapId="page-wrap"
        className="pokemonTypeMenu"
        >
                        {pokemonTypes.map((type, index) => {
                            return (
                                <button className="menu-item" onClick={() => setPokemonType(type.name)} key={index}>{type.name}</button>
                                )
                        })}
        </Menu>
    </>
  );
};

export default PokemonTypeMenu;