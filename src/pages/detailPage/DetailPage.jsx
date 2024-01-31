import { useContext } from "react";
import { mainContext } from "../../assets/context/mainProvider";
import { useEffect } from "react";
import { useState } from "react";
import "../detailPage/DetailPage.css"
import { useParams } from "react-router-dom";


const DetailPage = () => {
    let { id } = useParams()
    const { pokemonId, setPokemonId, pokemon, setPokemon } = useContext(mainContext)
    setPokemonId(id)
    console.log(pokemon);
    const [hidden, setHidden] = useState(true);
    // const {pokomenId} = useParams() hier werder die params geholt aus der url
    // setPokemonId(pokomenId) hier wird die id gesetzt





    return (<>
        {

            pokemon ? (
                <div className="detailContainer">

                    <div className="imageBgd"><img src={pokemon?.sprites?.other?.showdown?.front_default} alt={pokemon.name} /></div>
                    <h1>#{pokemon?.id} {pokemon?.name}</h1>

                    {/* hier mache ich die powers aber bin noch nicht fertig */}
                    <div className="powers">
                        {pokemon?.types?.map((powers, index) => (
                            <button key={index}>{powers.type.name}</button>
                        ))}
                    </div>
                    <div className="attacks">
                            <h2 onClick={() => {
                            setHidden(!hidden)
                            }}>Attacks and Movements</h2>
                            { hidden === false ? (
                                                           <ul>
                                                           {pokemon?.moves?.map((move, index) => (
                                                           <li className="attack" key={index}>{move.move.name}</li>
                                                           ))}
                                                           </ul> 
                            ) : (
                                null
                            ) }

                    </div>
                </div>
            )
                :
                (
                    <p>...loading</p>
                )

        }



        {/* {
            findPokemon ?
                <div>
                    <h1>{findPokemon.name}</h1>

                </div>
                : <p>...loading</p>
        } */}


    </>);
}

export default DetailPage;




// useEffect(() => {
//     setPokemon(123)
// }, [123])

// console.log("clg", pokemon);

// useEffect(() => {
//     const filterPokemon = pokemons.filter((data) => {
//         return data.id === Number(setPokemonId)
//     })
//     setPokemon(123)
// }, [setPokemon])

// console.log(filterPokemon);

// const filteredPokomen = pokemons.filter((pokomensort) => {
//     return pokomensort === Number(pokemonId)
// })

// const findPokemon = pokemons.find((pokemon) => pokemon.name === Number(pokemonId))



// useEffect(() => {
//     const filterData = datas.filter((data) => {
//         return data.id === Number(pizza.pizza)
//     })
//     setProduct(filterData[0])
// }, [pizza, datas])





// console.log("aici pokemonId", pokemonId);
// console.log("aici pokomens", pokemons);
// console.log("aici pokomens", pokemon);