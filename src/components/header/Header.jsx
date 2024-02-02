import logo from '../../assets/images/International_Pokémon_logo.png'
import SearchBar from '../searchBar/SearchBar'
import { Link, useParams } from 'react-router-dom'
import "./header.css"
import { mainContext } from '../../assets/context/mainProvider'
import darkmodeIcon from "../../assets/images/moon.png"
import lightmodeIcon from "../../assets/images/sun.png"
import { useContext } from 'react'


const Header = () => {
  const { setPokemons, backupPokemons, darkmode, setDarkmode } = useContext(mainContext)
  const { id } = useParams()
  // Darkmode toggle für das gesamte Projekt, setzt das Attribut data-theme auf "dark" oder "light". Diese werden in der CSS-Datei verwendet um das Styling zu ändern.
  const toggleDarkmode = () => {
    // Darkmode wird immer umgekehrt gesetzt, wenn das Icon geklickt wird
    setDarkmode(!darkmode)
    {darkmode ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark')}
  }

  return (
    <>
      <header>

              {/* Wenn die ID vorhanden ist, zeige den Back-Button an, andernfalls zeige die Suchleiste an */}
              <Link to="/" onClick={() => setPokemons(backupPokemons)}><img id="logo" src={logo} alt="logo" /></Link>
              {/* Wenn Darkmode aktiv ist, zeige das Lightmode-Icon an, andernfalls zeige das Darkmode-Icon an */}
              {/* Ebenfalls wird die toggleDarkmode Funktion aufgerufen, wenn das Icon geklickt wird */}
              { darkmode ? <img id="darkmode-icon" onClick={() => toggleDarkmode()} src={lightmodeIcon}></img> : <img id="darkmode-icon" onClick={() => toggleDarkmode()} src={darkmodeIcon}></img> }
              {/* Wenn ID  nicht vorhanden ist, zeige die Suchleiste nicht an, andernfalls zeige die Suchleiste an */}
              {id ? null : <SearchBar />}
              {/* Wenn ID vorhanden ist, zeige den Back-Button an, andernfalls zeige nichts an */}
              {id ?
              <Link to="/" onClick={() => setPokemons(backupPokemons)}>Back</Link>
              : null }      
              </header>
    </>
  )
}

export default Header