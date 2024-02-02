import React, { useContext } from 'react'
import logo from '../../assets/images/International_Pokémon_logo.png'
import SearchBar from '../searchBar/SearchBar'
import { Link, useParams } from 'react-router-dom'
import "./header.css"
import { mainContext } from '../../assets/context/mainProvider'

const Header = () => {
  const { setPokemons, backupPokemons } = useContext(mainContext)
  const { id } = useParams()
  return (
    <>
      <header>
              <Link to="/" onClick={() => setPokemons(backupPokemons)}><img src={logo} alt="logo" /></Link>
              {id ? null : <SearchBar />}
              {id ?
              <Link to="/" onClick={() => setPokemons(backupPokemons)}>Back</Link>
              : null }      
              </header>
    </>
  )
}

export default Header