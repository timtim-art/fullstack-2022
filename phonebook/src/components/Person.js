import React from 'react'

const Person = ( {name, number, deletePersona} ) => {

    return (
        <div>{name} {number}
        <button onClick={deletePersona}>delete</button>
        </div>
    )
}

export default Person