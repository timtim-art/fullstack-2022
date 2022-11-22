import React from 'react'

const Filter = ({findCountry, handleSearch}) => {

    return (
    <div>
    <p>find countries<input 
    value = {findCountry}
    onChange = {handleSearch}
    /></p>
    </div>
    )
    

}

export default Filter
