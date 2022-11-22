import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Success from './components/Success'
import Fail from './components/Fail'
import personSubmit from './services/PersonSubmit'

const App = () => {

  useEffect(() => {
    personSubmit
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ findPerson, setNewSearch ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState('')
  const [ failedMessage, setFailMessage ] = useState('')

  const newPerson = { name: newName,
                      number: newNumber };


  const addPersona = (event) => {
    event.preventDefault()

    if (persons.map(person => person.name).some(person => person === newPerson.name)) {
      window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)
      const person = (persons.find(n => n.name === newName))
      const personChangedNumber = { ...person, number: newPerson.number }

      personSubmit

      .changeNumber(person.id, personChangedNumber)

      .then(returnedObject => {
        setSuccessMessage(`Changed ${personChangedNumber.number}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        setPersons(persons.map(person => person.id !== returnedObject.data.id ? person : returnedObject.data))})

        .catch(() => {
          setFailMessage(`Information of ${personChangedNumber.name} has already been removed from the server`)
          setTimeout(() => {
            setFailMessage(null)
          }, 5000)
        })
    }
    else {
    personSubmit

    .create(newPerson)

    .then(response => {
      setPersons(persons.concat(response.data))
      setSuccessMessage(`Added ${response.data.name}`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    })
    setNewName('')
    setNewNumber('')
    }
  }

  const deletePersona = (id, name) => {
    window.confirm(`Delete ${name} ?`)
    personSubmit
    .update(id, persons)
    .then(
      returnedData => {
        setPersons(returnedData.data)
      }
      )
  }


  const handleNewPersona = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearch = (e) => {
    setNewSearch(e.target.value)   
  }

  return (
    <div>
      <h1>Phonebook</h1>
          <Success
          message = {successMessage}
          />
          <Fail
          message = {failedMessage}
          />
          <Filter 
            findPerson = {findPerson}
            handleSearch = {handleSearch}/>
      <h2>enter a new</h2>
          <PersonForm 
            newName = {newName}
            newNumber = {newNumber}
            handleNewPersona = {handleNewPersona}
            handleNewNumber = {handleNewNumber}
            addPersona = {addPersona}/>
      <h2>Numbers</h2>
          <Persons 
            persons={persons}
            findPerson = {findPerson}
            deletePersona = {deletePersona}
             />
    </div>
  )
}

export default App
