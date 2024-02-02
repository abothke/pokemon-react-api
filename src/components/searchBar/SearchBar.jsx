import { useContext, useRef } from 'react'
import { mainContext } from '../../assets/context/mainProvider'

const SearchBar = () => {
    const { pokemons, setPokemons, backupPokemons, setBackupPokemons } = useContext(mainContext)
    const pokemonRef = useRef()
    // Funktion um nach Pokemons zu suchen
    const pokemonSearch = (e) => {
        // Wenn das Array backupPokemons mehr als 0 Einträge hat, dann wird das Array backupPokemons nach dem Eintrag durchsucht, andernfalls wird das Array pokemons nach dem Eintrag durchsucht
    if (backupPokemons.length > 0) {
        // Result wird auf das Array backupPokemons gesetzt, wenn ein Eintrag gefunden wird, der den Suchbegriff enthält, damit das Array nicht verändert wird und die Suche wiederholt werden kann.
        const result = [...backupPokemons].filter((pokemon) => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setPokemons(result)
    } else{
        // Wenn das Array backupPokemons leer ist, dann wird das Array pokemons nach dem Eintrag durchsucht
        setBackupPokemons(pokemons)
    }
    }
    return (
    <div className='framed no-hd searchBar'>
    <input
    style={{width:"100%"}}
    type="text"
    ref={pokemonRef}
    onChange={pokemonSearch}
    placeholder='search for a pokemon'
    />
    </div>
    )
}

export default SearchBar