import React, { useContext } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import Card from '../card/Card'
const List = () => {

    const { pokemons } = useContext(mainContext)

    console.log("datas vom List", typeof pokemons);
    const pokemonObj = pokemons[0]?.pokemon ? "" : "Pokemon not found"
    console.log(pokemons[0]);
    return (
        <>
            <div>List</div>

            <main>
            <h2>
                {pokemons[0] === undefined ? (
                    <p>Pokemon not found</p>
                )
            :
            (
                null
            )}
            </h2>
                {pokemons.map((data, index) => {
                    return (
                        <div key={index}>
                            <Card
                                data={data}
                            />
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default List