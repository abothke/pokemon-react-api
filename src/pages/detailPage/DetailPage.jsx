import { useContext } from "react";
import { mainContext } from "../../assets/context/mainProvider";
import { useState } from "react";
import "./detailPage.css"
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import ArrowToTop from "../../components/arrowToTop/ArrowToTop";


const DetailPage = () => {
    // id wird aus der URL geholt
    let { id } = useParams()
    // setPokemonId und pokemon werden aus dem Context geholt
    const { setPokemonId, pokemon } = useContext(mainContext)
    // setPokemonId wird auf die id gesetzt, die aus der URL geholt wurde
    setPokemonId(id)
    // console.log(pokemon);
    // usesState um die Liste der Pokemons zu verstecken oder anzuzeigen
    const [hidden, setHidden] = useState(true);

    // falls die id weniger als 3 Zeichen hat, wird die id mit Nullen aufgefüllt
    const idMitNullen = `#${id.padStart(3, '0')}`

    return (
    <>
        <Header />
        {
            // Wenn pokemon vorhanden ist, dann zeige das Pokemon an, andernfalls zeige "loading" an
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
                            {/*  Wenn hidden false ist, zeige die Liste der Angriffe und Bewegungen an, andernfalls zeige nichts an */}
                                    <button className="button" onClick={() => {
                                        setHidden(!hidden)
                                    }}>Attacks and Movements</button>
                            {hidden === false ? (
                                    <ul>
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
                        <h4>... loading<details></details></h4>
                    </div>
                )
        }
        <ArrowToTop />
    </>
    );
}

export default DetailPage;