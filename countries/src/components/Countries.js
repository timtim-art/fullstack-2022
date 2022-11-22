import React from 'react'
import Country from "./Country"

const Countries = ( {countries, findCountry, countriesShown, showDetails} ) => {

        countriesShown = countries.filter(countries => (countries.name.common.toLowerCase().includes(findCountry.toLowerCase())))

        return countriesShown.length >1 ?

        countriesShown.length > 10 ? "Too many matches, specify another filter"

        : countriesShown.map(countries => {

                return <div key={countries.name.common}>{countries.name.common} <button onClick={() => showDetails(countries.name.common)}>show</button></div>

                })

        : countriesShown.map(country => {

            return (
                <div key = {Country}>
                    <Country country = {country}/>
                </div>
                

            )

        })
        


}
    

       


export default Countries