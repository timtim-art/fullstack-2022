import React from "react"

const PersonForm = ({addPersona, newName, handleNewPersona, newNumber, handleNewNumber}) => {

    return(

  <form onSubmit= {addPersona}>
  <div>
    name: <input 
    value = {newName}
    onChange = {handleNewPersona}
    />
  </div>
  <div>
    number: <input 
    value = {newNumber}
    onChange = {handleNewNumber}
    /></div>
  <div>
    <button type='submit'>add</button>
  </div>
</form>
)
}

export default PersonForm