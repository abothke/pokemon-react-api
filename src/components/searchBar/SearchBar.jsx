import React, { useContext, useRef, useState } from 'react'
import { mainContext } from '../../assets/context/mainProvider'

const SearchBar = () => {
    const { pokemons, setPokemons, backupPokemons, setBackupPokemons } = useContext(mainContext)
    const pokemonRef = useRef()

    const pokemonSearch = (e) => {
    if (backupPokemons.length > 0) {
        const lowercase = e.target.value.toLowerCase()
        const result = [...backupPokemons].filter((pokemon) => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setPokemons(result)
    } else{
        setBackupPokemons(pokemons)
    }
    }
    return (
    <>
    <input className='framed no-hd'
    type="text"
    ref={pokemonRef}
    onChange={pokemonSearch}
    placeholder='search for a pokemon'
    />
    </>
    )
}

export default SearchBar