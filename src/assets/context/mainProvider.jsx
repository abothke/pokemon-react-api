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
    const [backupPokemons, setBackupPokemons] = useState([])
    const [apiLimit, setApiLimit] = useState(151)


    // Fetch für die 151 Pokemon über die API
    useEffect(() => {
        const getPokemons = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${apiLimit}`);
            setPokemons(res.data.results);
            setBackupPokemons(res.data.results)
        };
        getPokemons();
    }, [apiLimit]);

    console.log(pokemons);

    // Fetch für das einzelne Pokemon über die API, wenn pokemonID gesetzt wird
    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            setPokemon(res.data);
            console.log("hie res data", res.data);
        };
        { pokemonId ? getPokemon() : null }
    }, [pokemonId]);

    // Fetch der Typen der Pokemons um in PokemonTypes zu setzen als Array.

    useEffect(() => {
        const getPokemonTypes = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/type/")
            setPokemonTypes(res.data.results)
        }
        getPokemonTypes()
    }, [])

    console.log(pokemonTypes);

    return (
        <>
            <mainContext.Provider value={{ pokemons, setPokemons, pokemon, setPokemon, backupPokemons, setBackupPokemons, pokemonType, setPokemonType, pokemonTypes, setPokemonTypes, pokemonId, setPokemonId, searchTerm, setSearchTerm, darkmode, setDarkmode, apiLimit, setApiLimit }}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider