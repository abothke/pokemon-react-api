import React, { useContext } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import Card from '../card/Card'
import './list.css'
const List = () => {

    const { pokemons, apiLimit, setApiLimit } = useContext(mainContext)

    console.log("datas vom List", typeof pokemons);
    const pokemonObj = pokemons[0]?.pokemon ? "" : "Pokemon not found"
    console.log(pokemons[0]);
    return (
        <>
            <main>
                {pokemons[0] === undefined ? (
                    <h2>Pokemon not found</h2>
                )
            :
            (
                null
            )}
                {pokemons.map((data, index) => {
                    return (
                        <div className='pokemonWrapper' key={index}>
                            <Card
                                data={data}
                            />
                        </div>
                    )
                })}
                { pokemons.length === apiLimit ? (
                    <button onClick={() => {
                        setApiLimit(apiLimit + 100)
                        console.log(apiLimit);
                        }}>Load more</button>
                )
                :
                (
                    null
                )}
                
            </main>
        </>
    )
}

export default List