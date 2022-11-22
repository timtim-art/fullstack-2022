import React from 'react'

const Filter = ({findPerson, handleSearch}) => {

    return (
    <div>
    <p>filter shown with<input 
    value = {findPerson}
    onChange = {handleSearch}
    /></p>
    </div>
    )
    

}

export default Filter
