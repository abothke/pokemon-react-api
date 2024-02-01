import React from 'react'
import Header from '../../components/header/Header'
import List from '../../components/list/List'
import ArrowToTop from '../../components/arrowToTop/ArrowToTop'
import PokemonTypeMenu from '../../components/pokemonTypeMenu/pokemonTypeMenu'

const Home = () => {
  return (
    <>
    <PokemonTypeMenu />
    <Header />
    <List />
    <ArrowToTop />
    </>
  )
}

export default Home