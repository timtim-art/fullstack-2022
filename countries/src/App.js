import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {

  
  const [countries, setCountries] = useState([])
  const [findCountry, setNewSearch] = useState('')
  let countriesShown = []

  const handleSearch = (e) => {
    setNewSearch(e.target.value)   
  }

  const showDetails = (e) => {
    countriesShown = e
    setNewSearch(countriesShown);
  }

  useEffect (() => {axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
    
  }, [])




  return (
    <div>

      <Filter findCountry = {findCountry} handleSearch = {handleSearch}/>

      <Countries findCountry = {findCountry} countries = {countries} countriesShown = {countriesShown} showDetails={showDetails} />
    </div>
  )



}

export default App;
