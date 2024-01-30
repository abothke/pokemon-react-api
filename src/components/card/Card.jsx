import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {

    // console.log(data);
    return (
        <>
            <h2>Title{data.name}</h2>
            
            <Link to={`/List/${data.id}`}><button>Read More</button></Link>
        </>
    )
}

export default Card