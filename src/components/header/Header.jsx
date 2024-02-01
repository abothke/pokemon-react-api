import React from 'react'
import PokemonTypeMenu from '../pokemonTypeMenu/pokemonTypeMenu'
import logo from '../../assets/images/International_Pokémon_logo.png'
import SearchBar from '../searchBar/SearchBar'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {

  return (
    <>
      <header>
              <PokemonTypeMenu />
              <Link to="/"><img src={logo} alt="logo" /></Link>
              <SearchBar />
      </header>
    </>
  )
}

export default Header