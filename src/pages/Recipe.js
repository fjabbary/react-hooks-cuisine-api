import React from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
    const { id } = useParams();
    return (
        <div>Single Recipe: id= {id}</div>
    )
}

export default Recipe