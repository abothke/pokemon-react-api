import React from 'react'
import logo from '../../assets/images/International_Pokémon_logo.png'
import SearchBar from '../searchBar/SearchBar'
import { Link, useParams } from 'react-router-dom'
import "./header.css"

const Header = () => {

  const { id } = useParams()
  return (
    <>
      <header>
              <Link to="/"><img src={logo} alt="logo" /></Link>
              {id ? null : <SearchBar />}
              {id ?
              <Link to="/">Back</Link>
              : null }      
              </header>
    </>
  )
}

export default Header