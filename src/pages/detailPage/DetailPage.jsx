import { useContext } from "react";
import { mainContext } from "../../assets/context/mainProvider";
import { useState } from "react";
import "./detailPage.css"
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import ArrowToTop from "../../components/arrowToTop/ArrowToTop";


const DetailPage = () => {
    let { id } = useParams()
    const { pokemonId, setPokemonId, pokemon, setPokemon } = useContext(mainContext)
    setPokemonId(id)
    console.log(pokemon);
    const [hidden, setHidden] = useState(true);

    //falls id ist kleiner als 10 commt eine 0 vorne und acuh bei 100
    const idMitNullen = `#${id.padStart(3, '0')}`

    return (
    <>
        <Header />
        {
            pokemon ? (
                <main className="framed">
                    <div className="detailContainer">
                        <div className="imageBgd"><img src={pokemon?.sprites?.other?.showdown?.front_default} alt={pokemon.name} /></div>
                        <h1 className="title">{idMitNullen} {pokemon?.name}</h1>

                        <div className="powers">
                            {pokemon?.types?.map((powers, index) => (
                                <p className={`color-${powers.type.name}`} key={index}>{powers.type.name}</p>
                            ))}
                        </div>
                        <div className="attacks">
                            <ul className="framed buttons">
                                <li>
                                    <button onClick={() => {
                                        setHidden(!hidden)
                                    }}>Attacks and Movements</button>
                                </li>
                            </ul>
                            {hidden === false ? (
                                <ul className="framed">
                                    {pokemon?.moves?.map((move, index) => (
                                        <li className="framed buttons" key={index}>{move.move.name}</li>
                                    ))}
                                </ul>
                            ) : (
                                null
                            )}

                        </div>
                    </div>
                </main>
            )
                :
                (
                    < div className="detailContainer">
                        <h4>... loading the pokomen <details></details></h4>
                    </div>
                )
        }



        {/* {
            findPokemon ?
                <div>
                    <h1>{findPokemon.name}</h1>

                </div>
                : <p>...loading</p>
        } */}
        <ArrowToTop />
    </>
    );
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