
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import List from './components/list/List'
=======
import './App.css'
import PokemonTypeMenu from './assets/components/pokemonTypeMenu/pokemonTypeMenu';


function App() {
  return (
    <>

      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<List />} />
      </Routes>
=======
      <PokemonTypeMenu />
    </>
  )
}

export default App
