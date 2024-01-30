import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Context

export const mainContext = createContext();

// Provider

// pokeapi.co implementation


const MainProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [pokemonType, setPokemonType] = useState("");
    const [pokemonId, setPokemonId] = useState(null)
    const [searchTerm, setSearchTerm] = useState("");
    const [darkmode, setDarkmode] = useState(false)


    // Fetch für die 151 Pokemon über die API
    useEffect(() => {
        const getPokemons = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
            setPokemons(res.data.results);
        };
        getPokemons();
    }, []);

    console.log(pokemons);

    // Fetch für das einzelne Pokemon über die API, wenn pokemonID gesetzt wird
    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            setPokemon(res.data.results);
        };
        { pokemonId ? getPokemon() : null }
    }, [pokemonId]);

    // Fetch der Typen der Pokemons um in PokemonTypes zu setzen als Array.
    
    useEffect (() => {
        const getPokemonTypes = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/type/")
            setPokemonTypes(res.data.results)
        }
        getPokemonTypes()
    }, [])

    console.log(pokemonTypes);

  return (
    <>
    <mainContext.Provider value={{ pokemons, setPokemons, pokemon, setPokemon, pokemonType, setPokemonType, pokemonTypes, setPokemonTypes, pokemonId, setPokemonId, searchTerm, setSearchTerm, darkmode, setDarkmode }}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider