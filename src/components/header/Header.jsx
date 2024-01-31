import React from 'react'
import PokemonTypeMenu from '../pokemonTypeMenu/pokemonTypeMenu'
import logo from '../../assets/images/International_Pokémon_logo.svg.png'
import SearchBar from '../searchBar/SearchBar'

const Header = () => {

  return (
    <>
      <header>
              <PokemonTypeMenu />
              <img src={logo} alt="logo" />
              <SearchBar />
      </header>
    </>
  )
}

export default Header