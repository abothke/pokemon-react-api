import { useContext } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import Card from '../card/Card'
import './list.css'
const List = () => {

    const { pokemons, apiLimit, setApiLimit } = useContext(mainContext)

    // console.log("datas vom List", typeof pokemons);
    // console.log(pokemons[0]);

    return (
        <>
            <main className='framed'>
                {/* Wenn pokemons leer ist, zeige "Pokemon not found" an, andernfalls zeige das Array an */}
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
                {/*  Wenn die Anzahl der geladenen Pokémon gleich der API-Limit ist, zeige den "Load more" Button an, andernfalls zeige nichts an */}
                { pokemons.length === apiLimit ? (
                    <div className='framed'>
                    <button className='button' onClick={() => {
                        setApiLimit(apiLimit + 100)
                        console.log(apiLimit);
                        }}>Load more</button>
                        </div>
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