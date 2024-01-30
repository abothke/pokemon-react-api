import React, { useContext } from 'react'

import { mainContext } from '../../assets/context/mainProvider'
import Card from '../productCard/ProductCard'

const List = () => {

    const { datas } = useContext(mainContext)

    console.log("datas vom List", typeof datas);

    return (
        <>
            <div>List</div>

            <main>
                {datas.map((data, index) => {
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