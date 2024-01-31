
import { useState } from 'react'
import './App.css'
import DetailPage from './pages/detailPage/DetailPage'
import { Route, Routes } from 'react-router-dom'
import List from './components/list/List'
import PokemonTypeMenu from './assets/components/pokemonTypeMenu/pokemonTypeMenu';

function App() {
  return (
    <>
      <DetailPage />
      <PokemonTypeMenu />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<List />} />
      </Routes>
    </>
  )
}

export default App
