import React, { useContext } from 'react'
import { mainContext } from '../../assets/context/mainProvider'
import Card from '../card/Card'
const List = () => {

    const { pokemons } = useContext(mainContext)

    console.log("datas vom List", typeof pokemons);

    return (
        <>
            <div>List</div>

            <main>
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