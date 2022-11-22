import React from 'react'


const Country = ( {country} ) => {

    console.log(Object.values(country.languages));

    return (<div key={country.name.common}>
                <h1>{country.name.common}</h1>
                <div><p>capital </p>{country.capital}</div>
                <div><p>population </p>{country.population}</div>
                <br></br>
                <div><p><b>languages</b></p></div>
                <div><ul>
                    {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
                    </ul></div>
                <div><img src={country.flags.png} alt="flag of the country"></img></div>
                <div>
           </div>
           </div>)
}

export default Country