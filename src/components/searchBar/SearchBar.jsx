import React, { useContext, useRef, useState } from 'react'
import { mainContext } from '../../assets/context/mainProvider'

const SearchBar = () => {
    const { pokemons, setPokemons, backupPokemons } = useContext(mainContext)
    const pokemonRef = useRef()

    const pokemonSearch = (e) => {
    if (backupPokemons.length > 0) {
        const result = [...backupPokemons].filter((pokemon) => pokemon.name.includes(e.target.value))
        setPokemons(result)
    } else{
        setBackupPokemons(pokemons)
    }
    }
    return (
    <>
    <input
    type="text"
    ref={pokemonRef}
    onChange={pokemonSearch}
    />
    </>
    )
}

export default SearchBar