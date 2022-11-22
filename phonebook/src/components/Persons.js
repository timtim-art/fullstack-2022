import React from 'react'
import Person from './Person'

const Persons = ( {persons, findPerson, deletePersona} ) => {

    return persons.filter(person => person.name.toLowerCase().includes(findPerson.toLowerCase())).map(person =>  {
       
            return (<Person key = {person.name} name = {person.name} number = {person.number} deletePersona = {() => deletePersona(person.id, person.name)}/>)
    
})}

export default Persons