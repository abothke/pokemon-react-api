import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {

    // console.log(data);
    return (
        <>
            <h2>Title{data.title}</h2>
            <img src={data.images[3]} alt="" />
            <Link to={`/List/${data.id}`}><button>Read More</button></Link>
        </>
    )
}

export default Card