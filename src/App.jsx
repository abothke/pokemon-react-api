import './App.css'
import DetailPage from './pages/detailPage/DetailPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import PokemonTypeMenu from './components/pokemonTypeMenu/pokemonTypeMenu'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App
