import React, { useContext, useState } from 'react'
import logo from '../../assets/images/International_Pokémon_logo.png'
import SearchBar from '../searchBar/SearchBar'
import { Link, useParams } from 'react-router-dom'
import "./header.css"
import { mainContext } from '../../assets/context/mainProvider'
import darkmodeIcon from "../../assets/images/moon.png"
import lightmodeIcon from "../../assets/images/sun.png"

const Header = () => {
  const { setPokemons, backupPokemons, darkmode, setDarkmode } = useContext(mainContext)
  const { id } = useParams()

  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
    {darkmode ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark')}
  }

  return (
    <>
      <header>
              <Link to="/" onClick={() => setPokemons(backupPokemons)}><img id="logo" src={logo} alt="logo" /></Link>
              { darkmode ? <img id="darkmode-icon" onClick={() => toggleDarkmode()} src={lightmodeIcon}></img> : <img id="darkmode-icon" onClick={() => toggleDarkmode()} src={darkmodeIcon}></img> }
              {id ? null : <SearchBar />}
              {id ?
              <Link to="/" onClick={() => setPokemons(backupPokemons)}>Back</Link>
              : null }      
              </header>
    </>
  )
}

export default Header