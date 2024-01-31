import { useContext } from "react";
import { mainContext } from "../../assets/context/mainProvider";
import { useEffect } from "react";
import { useState } from "react";
import "../detailPage/DetailPage.css"


const DetailPage = () => {

    const { pokemonId, setPokemonId, pokemon, setPokemon } = useContext(mainContext)


    // const {pokomenId} = useParams() hier werder die params geholt aus der url
    // setPokemonId(pokomenId) hier wird die id gesetzt



    const idButton = () => {
        setPokemonId(1)
        console.log("hei hier", pokemonId);
        console.log("hei pokemon", pokemon);
        console.log("type", pokemon?.types[0]?.type?.name);

    }



    return (<>
        <h1>DetailPage</h1>
        <button onClick={() => idButton()}>text</button>

        {

            pokemon ? (
                <div className="detailContainer">

                    <div className="imageBgd"><img src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon.name} /></div>
                    <h1>#{pokemon?.id} {pokemon?.name}</h1>

                    {/* hier mache ich die powers aber bin noch nicht fertig */}
                    {/* <div className="powers">
                        {pokemon.types.map((powers, index) => (
                            <button key={index}>{powers.type.name}</button>
                        ))}
                    </div> */}
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